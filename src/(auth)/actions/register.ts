"use server";
import * as z from "zod";
import { RegisterSchema } from "@/(auth)/schemas";
import bcrypt from "bcryptjs";
import { db } from "@/(auth)/lib/db";
import { getUserByEmail } from "@/(auth)/data/user";
import {generateVerificationToken} from "@/(auth)/lib/tokens"
import { sendVerificationEmail } from "@/(auth)/lib/mail";


export const register=async (values:z.infer<typeof RegisterSchema>)=>{
    const validatesFields = RegisterSchema.safeParse(values);
    if(!validatesFields.success)
    {
        return {error:"Something went wrong!"};
    }
    const {email,password,name} = validatesFields.data;
    const hashedPassword = await bcrypt.hash(password,10);

    const existingUser = await getUserByEmail(email);
    if (existingUser){
        return {error: "Email already in use!"}
    }
    await db.user.create({
        data:{
            name,
            email,
            password:hashedPassword,
        }
    })

const verificationToken=await generateVerificationToken(email);

await sendVerificationEmail(
    verificationToken.email,
    verificationToken.token,
)

    return {success:"Confirmation email sent!"};
}