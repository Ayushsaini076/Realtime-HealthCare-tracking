import React from "react";

const arr = [
  {
    id: "1",
    icon: "",
    parameter: "Blood Pressure",
    value: "110/70",
    icon2: "",
    description: "92% higher than last time",
  },
  {
    id: "2",
    icon: "",
    parameter: "Heart Rate",
    value: "85 BPM",
    icon2: "",
    description: "5% lesser than last time",
  },
  {
    id: "3",
    icon: "",
    parameter: "Glucose Level",
    value: "75-90",
    icon2: "",
    description: "20% lesser than last time",
  },
  {
    id: "4",
    icon: "",
    parameter: "Blood Count",
    value: "9.456/ml",
    icon2: "",
    description: "25% lesser than last time",
  },
];

const Card = (props) => {
  return (
    <div className="bg-white w-1/5 h-48 p-[1rem] rounded-[0.4rem]">
      <img className="h-[2rem] w-[2rem]" src="" alt="" />
      <h4 className="text-2xl font-bold text-black-300 mt-[2rem]">
        {props.name}
      </h4>
      <p className="text-violet-500 text-xl mt-[0.5rem]">{props.val}</p>
      <div className="flex mt-[0.5rem]">
        <img className="h-[1rem] w-[1rem]" src="" alt="" />
        <p className="text-sm text-grey-200 ml-[0.2rem]">{props.desc}</p>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div className=" bg-blue-50 h-screen w-[85vw]">
      {/* <h3 className=" text-2xl text-state-900">Dashboard</h3> */}
      <div className="flex justify-around pt-4">
        <div className="w-3/4 h-48 pt-[1.5rem] pl-[10rem] border-4 border-indigo-500 bg-indigo-500 rounded-md">
          <h2 className="text-white text-4xl">Welcome Neri Kwang!</h2>
          <p className="text-white text-s mt-[0.5rem] mb-[0.5rem]">
            Lets check your health with us. Care with <br />
            your health from now to get better health
          </p>
          <button className="text-white text-center bg-sky-300 rounded-[0.3rem] h-[2.4rem] pl-[0.5rem] pr-[0.5rem] ">
            Connect to Doctor
          </button>
        </div>
        <div className="w-1/5 h-48 ml-[1.5rem] bg-white rounded-[0.4rem] p-[1.5rem]">
          <h4 className="text-black-300 text-xl font-bold">Profile</h4>
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
      <div className="flex justify-evenly mt-[3rem]">
        {arr.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            img1={item.icon}
            img2={item.icon2}
            name={item.parameter}
            val={item.value}
            desc={item.description}
          />
        ))}
      </div>
      <div className="mt-[3rem] flex ml-[2rem] ">
        <div className="w-1/2 h-80 ml-[2.5rem] bg-white rounded-[0.4rem] p-[1rem]">
          <div className="flex justify-between">
            <div>
              <h3 className="text-2xl font-bold">Performance Heart Rate</h3>
              <p className="text-sm text-grey-200">1-3 December 2023</p>
            </div>
            <div>
              <div className="flex justify-between h-[3rem] p-2 bg-violet-50 items-center">
                <p className="text-violet-800 text-xl text-bold">72 bmp</p>
                <p className="ml-2 text-grey-300 text-md">Average</p>
              </div>
            </div>
          </div>
          <div className="mchart"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
