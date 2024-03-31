import Link from "next/link";
import React from "react";

const Doctors = [
  {
    id: "1",
    img: "",
    spec: "Dentist",
    name: "Dr. Jane Cooper",
    exp: "12+ Years",
    add: "547 Carrington Trace Drive, Cornelius",
  },
  {
    id: "2",
    img: "",
    spec: "Neurologist",
    name: "Dr. Tom Cook",
    exp: "20 Years",
    add: "547 Carrington Trace Drive, Cornelius",
  },
  {
    id: "3",
    img: "",
    spec: "Cardiologist",
    name: "Dr. Harry Potter",
    exp: "20 Years",
    add: "547 Carrington Trace Drive, Cornelius",
  },
  {
    id: "4",
    img: "",
    spec: "General Doctor",
    name: "Dr. Swadhin Dhakne",
    exp: "16 Years",
    add: "Near Govt Office, Talegon Pune, India",
  },
  {
    id: "5",
    img: "",
    spec: "Pediatrician",
    name: "Dr. Emily Johnson",
    exp: "15 Years",
    add: "123 Main Street, Anytown",
  },
  {
    id: "6",
    img: "",
    spec: "Orthopedic Surgeon",
    name: "Dr. Michael Smith",
    exp: "18 Years",
    add: "456 Oak Avenue, Springfield",
  },
  {
    id: "7",
    img: "",
    spec: "Oncologist",
    name: "Dr. Sarah Wilson",
    exp: "22 Years",
    add: "789 Maple Drive, Lakeside",
  },
  {
    id: "8",
    img: "",
    spec: "Psychiatrist",
    name: "Dr. David Brown",
    exp: "25 Years",
    add: "101 Pine Street, Hillcrest",
  },
  {
    id: "9",
    img: "",
    spec: "Gynecologist",
    name: "Dr. Jessica Martinez",
    exp: "14 Years",
    add: "246 Elm Street, Riverside",
  },
  {
    id: "10",
    img: "",
    spec: "Urologist",
    name: "Dr. Christopher Lee",
    exp: "19 Years",
    add: "369 Cedar Lane, Parkside",
  },
  {
    id: "11",
    img: "",
    spec: "Dermatologist",
    name: "Dr. Olivia Garcia",
    exp: "17 Years",
    add: "802 Willow Road, Lakeshore",
  },
  {
    id: "12",
    img: "",
    spec: "Ophthalmologist",
    name: "Dr. Ethan Taylor",
    exp: "21 Years",
    add: "503 Birch Street, Pinecrest",
  },
  {
    id: "13",
    img: "",
    spec: "Endocrinologist",
    name: "Dr. Samantha Adams",
    exp: "23 Years",
    add: "701 Magnolia Avenue, Sunnyville",
  },
  {
    id: "14",
    img: "",
    spec: "Pulmonologist",
    name: "Dr. Andrew Clark",
    exp: "18 Years",
    add: "987 Cypress Drive, Hilltop",
  },
  {
    id: "15",
    img: "",
    spec: "Rheumatologist",
    name: "Dr. Lily White",
    exp: "16 Years",
    add: "654 Pinecone Lane, Meadowview",
  },
  {
    id: "16",
    img: "",
    spec: "ENT Specialist",
    name: "Dr. Benjamin Adams",
    exp: "20 Years",
    add: "369 Oak Street, Hillcrest",
  },
  {
    id: "17",
    img: "",
    spec: "Hematologist",
    name: "Dr. Sophia Brown",
    exp: "19 Years",
    add: "246 Willow Avenue, Lakeside",
  },
  {
    id: "18",
    img: "",
    spec: "Nephrologist",
    name: "Dr. Ethan Wilson",
    exp: "22 Years",
    add: "802 Magnolia Lane, Sunnyville",
  },
  {
    id: "19",
    img: "",
    spec: "Gastroenterologist",
    name: "Dr. Isabella Lee",
    exp: "15 Years",
    add: "503 Cypress Drive, Hilltop",
  },
  {
    id: "20",
    img: "",
    spec: "Allergist",
    name: "Dr. Matthew Taylor",
    exp: "18 Years",
    add: "701 Pine Street, Pinecrest",
  }
];


const DocCard = (props)=>{
  return(
    <div className="w-full h-full bg-white rounded-[0.4rem] hover:shadow p-[1rem] hover:scale-105 transition duration-300 cursor-pointer">
      <img className="h-1/2 w-full rounded-[0.3rem] mb-[1rem]" src="data:image/jpeg;base64,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" alt="" />
      <span className=" inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2" >{props.spec}</span>
      <h4 className="mb-2 font-bold text-black text-2xl">{props.name}</h4>
      <span className="text-blue-400 text-md">{props.exp}</span>
      <p className="mt-2">{props.add}</p>
      <Link href={`/conversations/${props.name}`}>
      <button className="w-full h-[2rem] border-2 border-blue-400 rounded-xl text-blue-400 text-center mt-4">Book Now</button>
      </Link>
    </div>
  )
}
const page = () => {
  return (
    <div className="bg-blue-50 h-screen w-[85vw] overflow-auto p-5">
      <div className="grid grid-rows-5 grid-flow-col gap-4 p-[2rem]">
      {
        Doctors.map((doctor)=>(
          <DocCard 
          key={doctor.id}
          img = {doctor.img}
          spec={doctor.spec}
          name={doctor.name}
          exp = {doctor.exp}
          add = {doctor.add}
          />
        ))
      }

      </div>
     
    </div>
  );
};

export default page;
