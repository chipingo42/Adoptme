import React from 'react'

const AdoptLuna = () => {
  return (
    <div className='bg-[#FFFFFFDE] h-screen w-screen fixed top-0 z-40'>
      <div className='absolute left-[30%] top-[30%] w-[451px] h-[300px] bg-[#FFFFFF] rounded-md shadow-xl flex flex-col justify-center items-center'>
        <h1 className=' font-Inter font-[500] text-[24px] leading-[25px] text-[#344062] '>Are you sure you want to</h1>
        <h1 className='font-Inter font-[500] text-[24px] leading-[25px] text-[#344062]'>adopt <span className='text-[#F15827]'>Luna</span>?</h1>
      <div className='flex justify-center space-x-3 mt-[30px] '>
        <div className='w-[154px] h-[46px] bg-[#0D75FF] flex justify-center items-center rounded-sm'>
          <p className=' font-Inter font-[500] text-[14px] text-[#FFFFFF] '>Adopt Luna</p>
        </div>
        <div className='w-[154px] h-[46px] bg-[#F3F5FB] flex justify-center items-center rounded-sm'>
        <p className=' font-Inter font-[500] text-[14px] text-[#58667E] '>Cancel</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AdoptLuna;