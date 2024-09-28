"use client"

// import {logout} from "@/(auth)/actions/logout"
// import { Children } from "react";

// interface LogOutButtonPtops{
//     children?:React.ReactNode;
// }

// export default function LogOutButton({children}:LogOutButtonPtops) {
//     const onClick =()=>{
//         logout();
//     }
//   return (
//     <span className="cursor-pointer" onClick={onClick}>
//         {children}
//     </span>
//   )
// }


"use client";
import { signOut } from "next-auth/react"; // Import from next-auth for session management

interface LogOutButtonProps {
  children?: React.ReactNode;
}

export default function LogOutButton({ children }: LogOutButtonProps) {
  const onClick = () => {
    signOut({
      callbackUrl: "/", // Optional: Redirect to login page after sign out
    });
  };

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
}
