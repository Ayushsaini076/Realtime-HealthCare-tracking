import { ActionButton } from "@/components/actionButton";
import Link from "next/link";
import React from "react";

const SignInPage = () => {
  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-blue-50">
      <div className="absolute left-6 top-4 flex items-center ">
        {/* <Image src="/logo.png " width={20} height={20} /> */}
        {/* <h1>Caretakr</h1> */}
        <span>
        Don't have an account?
          <Link href="/signup" className="hover:text-blue-800" > Sign up</Link>
        </span>
      </div>
      <div className="bg-white rounded-sm w-[60%] h-fit p-8 flex flex-col justify-center align-items">
        <h2 className="text-6xl mb-[3.5rem] font-bold ">Sign in</h2>
        <div className="flex flex-col w-[100%] justify-center items-center ">
          <ActionButton className="font-bold text-xl w-[25vw]">
            Google
          </ActionButton>
          <div className="border-t-2 border-gray-500 flex flex-col gap-4 text-xl mt-[2.5rem] pt-[2.5rem] ">
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent w-[25vw] broder-solid border-2 border-transparent hover:border-gray-400 focus:border-gray-400 px-6 py-4 bg-gray-200 "
                // value={user.email}
                // onChange={(e) => setUser({...user, email: e.target.value})}
              />
              <input
                type="password"
                placeholder="Password min. 8 characters"
                className="bg-transparent w-[25vw] broder-solid border-2 border-transparent hover:border-gray-400 focus:border-gray-400 px-6 py-4 bg-gray-200 "
                // value={user.password}
                // onChange={(e) => setUser({...user, password: e.target.value})}
              />
            </div>
            <div className="mt-[1rem] m-auto">
              <ActionButton
                className=" font-bold uppercase text-xl w-[25vw]"
                // onClick={handleSubmit}
              >
                Sign Up
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
