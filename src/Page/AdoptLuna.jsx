import React from 'react'

const AdoptLuna = ({ visible, onClose }) => {

  const editwindow = (e) => {
    if(e.target.id === 'luna') onClose()
  }
  if (!visible) return null;

  return (
    <div id='luna' className='bg-[#FFFFFFDE] min-h-screen w-screen fixed top-0 z-40 flex justify-center items-start' onClick={editwindow}>
      <div className='absolute  top-[30%] w-[451px] h-[300px] bg-[#FFFFFF] rounded-md shadow-xl flex flex-col justify-center items-center'>
        <h1 className='font-Inter font-[500] text-[24px] leading-[25px] text-[#344062] '>Are you sure you want to</h1>
        <h1 className='font-Inter font-[500] text-[24px] leading-[25px] text-[#344062]'>adopt <span className='text-[#F15827]'>Luna</span>?</h1>
        <div className='flex justify-center space-x-3 mt-[30px] '>
          <button className='w-[154px] h-[46px] bg-[#0D75FF] flex justify-center items-center rounded-sm'>
            <span className='font-Inter font-[500] text-[14px] text-[#FFFFFF] '>Adopt Luna</span>
          </button>
          <button className='w-[154px] h-[46px] bg-[#F3F5FB] flex justify-center items-center rounded-sm'>
            <span className='font-Inter font-[500] text-[14px] text-[#58667E] ' onClick={onClose}>Cancel</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdoptLuna;