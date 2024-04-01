"use client";
import Link from "next/link";
import React, { useState } from "react";

import { Montserrat } from "next/font/google";

import { registerables, Chart } from "chart.js";
import { Line } from "react-chartjs-2";
Chart.register(...registerables);

import { data1, data2, data3, data4 } from "@/constants/graphdata";

import { FileClock } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Graph = ({ data }) => {
  return <Line className="w-ful rounded-lg" data={data} />;
};

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const boxs = [
  {
    heading: "Blood pressure",
    condition: "Above norm",
    value: "120/89",
    measurement: "mmHg",
    graph: <Graph data={data1} />, // Placeholder for graph component
    color: "text-violet-500",
  },
  {
    heading: "Heart rate",
    condition: "In the norm",
    value: "120",
    measurement: "beats per minute",
    graph: <Graph data={data2} />, // Placeholder for graph component
    color: "text-orange-500",
  },
  {
    heading: "Glucose",
    condition: "Normal",
    value: "100",
    measurement: "mg/dL",
    graph: <Graph data={data3} />, // Placeholder for graph component
    color: "text-orange-500",
  },
  {
    heading: "Cholesterol",
    condition: "Above norm",
    value: "200",
    measurement: "mg/dL",
    graph: <Graph data={data4} />, // Placeholder for graph component
    color: "text-violet-500",
  },
];

const page = () => {
  const [user, setUser] = useState({});

  return (
    <div className=" bg-blue-50 h-screen w-[85vw] flex overflow-auto">
      <div className="p-5 h-full w-1/5 text-wrap">
        <div className=" h-fit  bg-white rounded-lg">
          <h4 className="text-black-300 text-xl font-bold flex justify-center items-center pt-3">
            Profile
          </h4>
          <div className="flex flex-col justify-center items-center p-2">
            <img
              className=" object-cover overflow-hidden h-50 w-50 bg-green-400 m-5 rounded-md"
              src="/patient.png"
              alt="patient photo"
            />
            <h5 className="text-xl font-bold ">Sayantan Gain</h5>
            <h5 className="text-xl font-bold ">21 Y.O</h5>
            <div className="px-3 py-2 flex-1">
              <Link
                href="/history"
                className="flex items-center  m-3 justify-center"
              >
                <div className="flex items-center flex-1 text-emerald-500 font-bold ">
                  <FileClock className={cn("h-5 w-5 mr-1 text-emerald-500")} />
                  Patient History
                </div>
              </Link>
            </div>
          </div>
          <div className="flex justify-start pl-3 flex-col flex-1 pb-5">
            <div className="pt-3">
              <div className="text-sm">Country:</div>
              <div className=" font-bold text-xl pt-2">India</div>
            </div>
            <div className="pt-3">
              <div className="text-sm">Gender:</div>
              <div className=" font-bold text-xl pt-2">Male</div>
            </div>
            <div className="pt-3">
              <div className="text-sm">Height:</div>
              <div className=" font-bold text-xl pt-2">6 ft</div>
            </div>
            <div className="pt-3">
              <div className="text-sm">Weight:</div>
              <div className=" font-bold text-xl pt-2">85 kg</div>
            </div>
            <div className="pt-3">
              <div className="text-sm">Blood Group:</div>
              <div className=" font-bold text-xl pt-2">B+</div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-4/5 p-5 pl-2 ">
        <div className=" bg-white h-full rounded-lg p-14">
          <div className="grid grid-cols-2 grid-rows-2  mt-5 gap-10">
            {boxs.map((box) => (
              <Card>
                <CardHeader className="flex justify-between flex-row">
                  <div>
                    <CardTitle
                      className={cn("text-2xl font-bold", montserrat.className)}
                    >
                      {box.heading}
                    </CardTitle>
                    <CardDescription
                      className={cn(
                        "text-xl font-semibold ",
                        montserrat.className
                      )}
                    >
                      {box.condition}
                    </CardDescription>
                  </div>
                  <div>
                    <CardTitle className="p-2">
                      <span
                        className={
                          (cn("text-2xl font-bold", montserrat.className),
                          cn("h-5 w-5 mr-3", box.color))
                        }
                      >
                        {box.value}
                      </span>
                      <span
                        className={cn(
                          "text-xl font-semibold",
                          montserrat.className,
                          "pl-2"
                        )}
                      >
                        {box.measurement}
                      </span>
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="w-full">{box.graph}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
