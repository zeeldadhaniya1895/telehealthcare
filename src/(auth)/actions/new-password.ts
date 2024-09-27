"use server";
import * as z from "zod";
import { NewPasswordSchema } from "@/(auth)/schemas";
import { getPasswordResetTokenByToken } from "@/(auth)/data/password-reset-token";
import { getUserByEmail } from "@/(auth)/data/user";
import bcrypt from "bcryptjs";
import { db } from "@/(auth)/lib/db";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/../../routes";
import { signIn } from "@/(auth)/auth";

export const newPassword=async(values:z.infer<typeof NewPasswordSchema>,token?:string|null,)=>{

    if(!token)
    {
        return {error:"missing token!"};
    }
    const validatedFields=NewPasswordSchema.safeParse(values);

    if(!validatedFields){
        return {error:"Invalid fields!"};
    }
    const { password } = validatedFields.data as { password: string }; 
    
    const existingToken=await getPasswordResetTokenByToken(token);

    if(!existingToken){
        return {error:"Invalid token!"}
    }
    const hasExpired=new Date(existingToken.expires)<new Date() 
    if(hasExpired)
    {
        return {error:"token has expired!"};
    }
    const existingUser=await getUserByEmail(existingToken.email);
    if(!existingUser)
    {
        return {error:"Email does not exist!"}
    }
    const email=existingToken.email;

    const hashedPassword=await bcrypt.hash(password,10);
    await db.user.update({
        where:{id:existingUser.id},
        data:{password:hashedPassword},
    })
    await db.passwordResetToken.delete({
        where:{id:existingToken.id}
    })
    
    
    return{success:"password is updated!"}
}
