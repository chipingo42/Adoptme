import React from 'react'

export default function  Skeleton() {
  return(
    <div className='mt-6 w-full'>
      <div className='flex flex-wrap justify-between gap-14 md:gap-9 md:px-4 sm:gap-12 sm:px-0  overflow-hidden'>

        <div className='relative space-y-3 overflow-hidden w-[360px] h-[339px] border border-solid bg-white border-[#F0F6FF] rounded-md p-3 md:w-full '>
          <div className=" h-48 w-full rounded-lg bg-[#E9EEF5] animate-pulse "></div>
          <div>
            <div className='flex justify-between items-center mt-[25px]'>
              <div>
                <div className=' h-4 w-32 rounded-full bg-[#F0F6FF] animate-pulse'></div>
                <div className=' h-2 mt-2 w-5/12 rounded-sm bg-[#F0F6FF] animate-pulse '></div>
              </div>
              <div className=' w-[30px] h-[30px] rounded-full bg-[#F0F6FF] animate-pulse'></div>
            </div>
            <div className='flex items-center justify-between mt-[23px]'>
              <div className='h-9 w-4/12 bg-[#F0F6FF] rounded-full animate-pulse'></div>
              <div className='flex space-x-3'>
                <div className=' w-[25px] h-[25px] rounded-full bg-[#F0F6FF] animate-pulse'></div>
                <div className=' h-3 mt-2 w-[86px] rounded-full bg-[#F0F6FF] animate-pulse'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative space-y-3 overflow-hidden w-[360px] h-[339px] border border-solid bg-white border-[#F0F6FF] rounded-md p-3 md:w-full '>
          <div className=" h-48 w-full rounded-lg bg-[#E9EEF5] animate-pulse "></div>
          <div>
            <div className='flex justify-between items-center mt-[25px]'>
              <div>
                <div className=' h-4 w-32 rounded-full bg-[#F0F6FF] animate-pulse'></div>
                <div className=' h-2 mt-2 w-5/12 rounded-sm bg-[#F0F6FF] animate-pulse '></div>
              </div>
              <div className=' w-[30px] h-[30px] rounded-full bg-[#F0F6FF] animate-pulse'></div>
            </div>
            <div className='flex items-center justify-between mt-[23px]'>
              <div className='h-9 w-4/12 bg-[#F0F6FF] rounded-full animate-pulse'></div>
              <div className='flex space-x-3'>
                <div className=' w-[25px] h-[25px] rounded-full bg-[#F0F6FF] animate-pulse'></div>
                <div className=' h-3 mt-2 w-[86px] rounded-full bg-[#F0F6FF] animate-pulse'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative space-y-3 overflow-hidden w-[360px] h-[339px] border border-solid bg-white border-[#F0F6FF] rounded-md p-3 md:w-full '>
          <div className=" h-48 w-full rounded-lg bg-[#E9EEF5] animate-pulse "></div>
          <div>
            <div className='flex justify-between items-center mt-[25px]'>
              <div>
                <div className=' h-4 w-32 rounded-full bg-[#F0F6FF] animate-pulse'></div>
                <div className=' h-2 mt-2 w-5/12 rounded-sm bg-[#F0F6FF] animate-pulse '></div>
              </div>
              <div className=' w-[30px] h-[30px] rounded-full bg-[#F0F6FF] animate-pulse'></div>
            </div>
            <div className='flex items-center justify-between mt-[23px]'>
              <div className='h-9 w-4/12 bg-[#F0F6FF] rounded-full animate-pulse'></div>
              <div className='flex space-x-3'>
                <div className=' w-[25px] h-[25px] rounded-full bg-[#F0F6FF] animate-pulse'></div>
                <div className=' h-3 mt-2 w-[86px] rounded-full bg-[#F0F6FF] animate-pulse'></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div> 
  )
}

