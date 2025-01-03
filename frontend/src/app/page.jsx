"use client";

import { ClerkLoading, UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();
  return (
    <div className="h-screen w-screen relative font-inter">
      <div className="absolute top-0 left-0 w-full h-24 border-b-2 border-white grid grid-cols-3 grid-rows-1 ">
        <h1 className="text-5xl self-center justify-self-center col-start-2 font-junge font-medium">
          YUAI
        </h1>
        {isLoaded ? (
          isSignedIn ? (
            <div className="flex self-center justify-self-center col-start-3">
              <UserButton />
              <p>&nbsp;</p>
              <h1>{user.firstName}</h1>
            </div>
          ) : (
            <div className="flex self-center justify-self-center col-start-3">
              <a href="/sign-in">sign-in</a>
              <p>&nbsp;/&nbsp;</p>
              <a href="sign-up">sign-up</a>
            </div>
          )
        ) : (
          <div className="flex self-center justify-self-center col-start-3">
            loading....
          </div>
        )}
      </div>
      <div className="w-full h-full p-10 flex items-center justify-center">
        <div className="h-96 w-72 border-2 rounded-xl border-white m-10"></div>
        <div
          className="h-96 w-72 border-2 rounded-xl border-white bg-white m-10 flex flex-col items-center justify-center cursor-pointer"
          onClick={() => router.push("/bots")}
        >
          <h1 className="text-black font-junge">YUAI PROFESSORS</h1>
        </div>
        <div className="h-96 w-72 border-2 rounded-xl border-white m-10"></div>
      </div>
    </div>
  );
}
