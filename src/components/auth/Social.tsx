"use client"

import { FcGoogle} from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import {signIn} from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { DEFAULT_LOGIN_REDIRECT } from "@/../../routes";


export default function Social() {
  const searchParams=useSearchParams();
  const callbackUrl=searchParams.get("callbackUrl");
    const onClick=(provider:"google"|"github")=>{
        signIn(provider,{
          callbackUrl:callbackUrl|| DEFAULT_LOGIN_REDIRECT,
        })
    }
  return (
    <div className="flex items-center w-full gap-x-2">
      
      <Button
        size="lg" className="flex-1" variant="outline" onClick={()=>onClick("google")}    
      >
        <FcGoogle className="h-5 w-5"/>
      </Button>
      <Button
        size="lg" className="flex-1" variant="outline" onClick={()=>onClick("github")}    
      >
        <FaGithub className="h-5 w-5"/>
      </Button>
      
    </div>
  );
};