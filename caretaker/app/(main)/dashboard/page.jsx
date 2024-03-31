'use client'
import { registerables, Chart } from "chart.js";

import React from 'react'
import { Line } from 'react-chartjs-2';

import { Download } from "lucide-react";
import { Trash } from "lucide-react";
import { File } from "lucide-react";
import { TrendingDown } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { Droplet } from "lucide-react";
import { HeartPulse } from "lucide-react";
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import { Bloodtype } from "@mui/icons-material";

Chart.register(...registerables)

const arr = [
  {
    id: "1",
    icon: <Droplet size={35} color="blue"/>,
    parameter: "Blood Pressure",
    value: "110/70",
    icon2: <TrendingUp color="green"/>,
    description: "92% higher than last time",
  },
  {
    id: "2",
    icon: <HeartPulse size={35} color="blue"/>,
    parameter: "Heart Rate",
    value: "85 BPM",
    icon2:<TrendingDown color="red"/>,
    description: "5% lesser than last time",
  },
  {
    id: "3",
    icon: <MedicationLiquidIcon fontSize="large" color="primary"/>,
    parameter: "Glucose Level",
    value: "75-90",
    icon2:<TrendingDown color="red"/>,
    description: "20% lesser than last time",
  },
  {
    id: "4",
    icon: <Bloodtype fontSize="large" color="primary"/>,
    parameter: "Blood Count",
    value: "9.456/ml",
    icon2:<TrendingDown color="red"/>,
    description: "25% lesser than last time",
  },
];

const docs = [
  {
    id:"1",
    heading:"Medical Check Up Report",
    size:"2 Mb",
  },
  {
    id:"2",
    heading:"Blood Count Report",
    size:"4 Mb",
  },
  {
    id:"3",
    heading:"Glucose Level Report",
    size:"12 Mb",
  },
]

const Card = (props) => {
  return (
    <div className="bg-white w-1/5 h-48 p-[1rem] rounded-[0.4rem]">
      {props.img1}
      <h4 className="text-2xl font-bold text-black-300 mt-[2rem]">
        {props.name}
      </h4>
      <p className="text-violet-500 text-xl mt-[0.5rem]">{props.val}</p>
      <div className="flex mt-[0.5rem]">
        {props.img2}
        <p className="text-sm text-grey-200 ml-[0.2rem]">{props.desc}</p>
      </div>
    </div>
  );
};

const Doc = (props)=>{
  return(
    <div className="flex justify-between">
      <div className="flex">
        <File className="mr-[1rem]" size={35} color="blue"/>
        <div>
          <h4 className="font-bold text-md text-black">{props.heading}</h4>
          <p className="text-sm text-grey-200">{props.size}</p>
        </div>
      </div>
      <div className="flex w-[6rem] justify-between">
        <Trash/>
        <Download/>
      </div>
    </div>
  )
}

const data = {
  labels: ['2024-03-29T08:00:00Z', '2024-03-29T08:15:00Z', '2024-03-29T08:30:00Z', '2024-03-29T08:45:00Z', '2024-03-29T09:00:00Z'],
  datasets: [{
    label: 'Heart Rate',
    data: [70, 72, 75, 73, 76],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const HeartRateGraph=({data})=>{
  const options = {
    maintainAspectRatio: false,
    scales: {
      xAxis: [{
        type: 'time',
        time: {
          unit: 'minute'
        }
      }]
    }
  };
  return(
    <Line data={data} options={options}  />
  ) 
}

const page = () => {
  return (
    <div className=" bg-blue-50 h-[100%] w-[85vw]">
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
        <div className="w-1/5 h-48 ml-[1rem] bg-white rounded-[0.4rem] p-[1.5rem]">
          <h4 className="text-black-300 text-xl font-bold">Profile</h4>
          <div className="ml-[6rem] mt-[1rem]">
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
      <div className="mt-[3rem] flex ml-[1rem] ">
        <div className="w-1/2 h-60 ml-[1rem] bg-white rounded-[0.4rem] p-[1rem] ">
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
          <div >
              <HeartRateGraph  data={data}/>
          </div>
        </div>
        <div className="w-1/2 h-fit bg-white rounded-[0.4rem] p-[1rem] ml-[1rem]">
          <div className="flex justify-between">
          <div>
              <h3 className="text-2xl font-bold">Health Reports Document</h3>
              <p className="text-sm text-grey-200">5-7 December 2023</p>
            </div>
            <p className="text-violet-500 text-md">View All</p>

          </div>
          <div className="mt-[1rem]">
            {
              docs.map((item)=>(
                <Doc
                  key={item.id}
                 heading = {item.heading}
                 size={item.size}/>
              ))

            }
          </div>

        </div>
      </div>
    </div>
  );
};

export default page;
