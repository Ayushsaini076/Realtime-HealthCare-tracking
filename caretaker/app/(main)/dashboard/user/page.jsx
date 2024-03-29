import React from "react";

const page = () => {
  return (
    <div className=" bg-blue-50 h-screen w-[85vw]">
      <div className="p-5">
        <div className="w-1/5 h-48  bg-white rounded-lg">
          <h4 className="text-black-300 text-xl font-bold pt-3 pl-3">
            Profile
          </h4>
          <div className="ml-[8rem] mt-[1rem]">
            <img
              className="h-[4rem] w-[4rem] rounded-[50%] border-red-400 bg-green-400 "
              src=""
              alt=""
            />
            <h5 className="text-m font-bold ">Neri Kwang</h5>
            <p>Hello guys</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
