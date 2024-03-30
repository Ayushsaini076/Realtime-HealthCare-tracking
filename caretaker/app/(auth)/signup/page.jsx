import Image from 'next/image';
import React from 'react'

const SignUpPage = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center bg-blue-50' >
      <div className='absolute left-6 top-4 flex items-center ' >
        <Image src="/logo.png " width={20} height={20} />
        <h1>Caretakr</h1>
      </div>
        <div className='bg-white rounded-sm w-[60%] h-fit py-4 px-3' >
          hi
        </div>
    </div>
  )
}

export default SignUpPage;
