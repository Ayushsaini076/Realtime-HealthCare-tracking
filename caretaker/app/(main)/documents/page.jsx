'use client'
import React, { useState } from "react";

const page = () => {
  const [file,setFile] = useState(null);
  const handleSubmit=(e)=>{
    setFile(e.target.files[0]);
  }
  const handleFileChange= async()=>{
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      console.error('Please select a file.');
    }

  }
  return (
    <div className="bg-blue-50 h-screen w-[85vw] overflow-auto p-5">
      <div className="bg-white p-[2rem] w-full h-full flex flex-col items-center ">
      <div className="mt-[3rem]">
        <h2 className="text-3xl font-bold">Add Your Medical Documents</h2>
        
        <input type="file" accept="application/pdf" onChange={handleFileChange} />
        <button onClick={handleSubmit} className=" mt-[1rem] relative left-[5rem] h-[2rem] p-[2rem] rounded-lg bg-blue-500 text-white text-xl flex justify-center items-center" >Select your files</button>

        
      </div>
      <div className="mt-[4rem]" >
        <h2 className="relative right-[2rem] text-3xl font-bold " >Your Documents:-</h2>
        <div>
          <div className="h-[30vh] w-[15vw] bg-gray-500">
            
          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default page;
