import React from 'react'

export function Skeletondetails() {
  return (
    <div className='h-full flex flex-col justify-center overflow-hidden '>
      <div className='flex justify-between items-center  '>
        <div className='flex gap-4'>
          <div className='w-[80px] h-[80px] bg-[#F0F6FF] rounded-full flex items-center justify-center animate-pulse sm:w-[50px] sm:h-[50px]'>
            <div className='w-[50px] h-[50px] bg-[#DBE2F4] rounded-full sm:w-[30px] sm:h-[30px] '></div>
          </div>
          <div>
            <div className='h-5 w-[154px] bg-[#DBE2F4] rounded-full mt-2 animate-pulse'></div>
            <div className='h-3 w-[92px] bg-[#DBE2F4] rounded-full mt-2 animate-pulse'></div>
          </div>
        </div>
        <div className='w-[50px] h-[50px] bg-[#DBE2F4] rounded-full animate-pulse sm:w-[40px] sm:h-[40px]'></div>
      </div>
      <div className='bg-[#F8FAFD] min-h-[870px]  mt-[28px] px-[30px] rounded-lg  sm:px-[10px] sm:min-h-[800px]'>
        <div className='relative top-7 h-4 w-2/12 bg-[#DBE2F4] rounded-full animate-pulse'></div>
        <div className='h-56 w-full bg-[#DBE2F4] mt-[47px] rounded-md animate-pulse'></div>
        <div className='flex items-center gap-3 mt-[53px]'>
          <div className='bg-[#DBE2F4] h-32 w-3/12 rounded-md animate-pulse sm:h-20'></div>
          <div className='bg-[#DBE2F4] h-32 w-3/12 rounded-md animate-pulse sm:h-20'></div>
          <div className='bg-[#DBE2F4] h-32 w-3/12 rounded-md animate-pulse sm:h-20'></div>
          <div className='bg-[#DBE2F4] h-32 w-3/12 rounded-md animate-pulse sm:h-20'></div>
        </div>
        <div className='h-56 w-full bg-[#FFFFFF] mt-[47px] rounded-md shadow-md px-5 py-4 '>
          <div className='h-4 bg-[#DBE2F4] w-2/12 rounded-full animate-pulse'></div>
          <div className='h-2 bg-[#DBE2F4] w-11/12 rounded-full mt-4  animate-pulse'></div>
          <div className='h-2 bg-[#DBE2F4] w-10/12 rounded-full mt-4  animate-pulse'></div>
          <div className='h-2 bg-[#DBE2F4] w-10/12 rounded-full mt-4  animate-pulse'></div>
          <div className='h-10 bg-[#DBE2F4] w-2/12 rounded-sm mt-9  animate-pulse'></div>
        </div>
        <div className='h-12 bg-[#DBE2F4] w-2/12 mt-8 rounded-full animate-pulse'></div>
      </div>
    </div>
  )
}
