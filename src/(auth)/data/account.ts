import { db } from "@/(auth)/lib/db";


export default async function getAccountByUserId(userId:string) {
  try{
    const account=await db.account.findFirst({
       where:{userId} 
    })
    return account;
  }catch{
        return null;
  }
}
