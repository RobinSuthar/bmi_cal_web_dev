// /app/components/Navbar.js
"use client";
import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";


// To do
export const Navbar = () => {
//   const { status } = useSession();
//   console.log("AAA status ", status);

  return (
    

    <div className="p-4 flex justify-between shadow-md">
      {/* <Link href="/" className="font-bold text-lg text-blue-600">
        Home
      </Link> */}


      
    <h1 className="text-2xl font-bold text-center flex-grow">
        The French Fries BMI Calculator
      </h1>
     

      {status === "authenticated" ? (
        <button
          onClick={() => signOut()}
          className="p-2 bg-sky-400 text-white rounded-lg"
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="p-2 bg-sky-400 text-white rounded-full"
        >
          Log In
        </button>
      )}
    </div>
  );
};