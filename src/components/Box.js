import React from 'react'

const Box = ({children}) => {
  return (
    <div className='w-full m-auto max-w-[1200px] px-2'>
        {children}
    </div>
  )
}

export default Box