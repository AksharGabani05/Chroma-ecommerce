import React, { useRef } from 'react'
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi"

const SliderAuto = ({ children,width,isflex }) => {
  const contentBoxRef = useRef()

  const scrollRight = ()=>{
    contentBoxRef.current.scrollLeft += width;
  }
  const scrollLeft = ()=>{
    contentBoxRef.current.scrollLeft -= width;
  }
  return (
    <div className='flex my-4'>
      <button className='text-white text-xl hidden md:block' onClick={scrollLeft}>
        <TfiAngleLeft />
      </button>
      <div className={`${isflex} md:flex overflow-scroll scrollbar-none transition-all gap-3`} ref={contentBoxRef}>
        {children}
      </div>
      <button className='text-white text-xl hidden md:block' onClick={scrollRight}>
        <TfiAngleRight />
      </button>
    </div>
  )
}

export default SliderAuto