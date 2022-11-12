"use client"
import {useRouter} from "next/navigation";

const SignOutButton = () => {
  const router = useRouter();

  return (
    <button onClick={async () => {
      if(window.Clerk){
          await window.Clerk.signOut();
          // hide content, show loader

          // redirect
          router.replace("/")
      }

  }} >
    Sign out
  </button>
  );
};

export default SignOutButton;