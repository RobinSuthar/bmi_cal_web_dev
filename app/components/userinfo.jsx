"use client";
import Image from "next/image";
import LoginPage from './../login/page';

// To do 

export const UserInfo = () => {
  const { data: session, status } = useSession();
  console.log("AAA session ", session);

  return status === "authenticated" ? (
    <div className="flex flex-col items-center gap-4 shadow-md p-4">
      <Image
        src={session.user.image}
        alt="User Image"
        width={40}
        height={40}
        className="w-10 h-10 rounded-full"
      />
      <span className="text-xl font-bold">{session.user.name}</span>
      <span className="font-bold">{session.user.email}</span>
    </div>
  ) : (
    <LoginPage />
  );
};