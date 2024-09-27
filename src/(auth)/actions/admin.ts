"use server"

import { currentRole } from "@/(auth)/lib/auth"
import { UserRole } from "@prisma/client";

export const admin=async()=>{
    const role=await currentRole();

    if(role=== UserRole.ADMIN)
    {
        return {success:"Allowed!"};
    }

    return {error : "Forbidden!"}
}