"use server"
import { ResetSchema } from "@/(auth)/schemas"
import { getUserByEmail } from "@/(auth)/data/user"
import * as z from"zod";
import { sendPasswordResetEmail } from "@/(auth)/lib/mail";
import { generatePasswordResetToken } from "@/(auth)/lib/tokens";

export const reset=async(values:z.infer<typeof ResetSchema>)=>{

    const validatedFields=ResetSchema.safeParse(values);

    if(!validatedFields.success)
    {
        return {error:"User not found"}
    }
    const{email} =validatedFields.data;
    const existingUser=await getUserByEmail(email)

    if(!existingUser)
    {
        return{error:"Email not found!"}
    }

    const passwordResetToken=await generatePasswordResetToken(email);
    await sendPasswordResetEmail(passwordResetToken.email,passwordResetToken.token);

    return { success:"Reset email sent!"};
}


