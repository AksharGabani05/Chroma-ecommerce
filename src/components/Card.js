import React from 'react'
import { AiFillStar } from "react-icons/ai"

const Card = ({ id, img, pricesell, pricedis, title }) => {
    return (
        <div className='bg-[#1e1e1e] p-5 my-2 min-w-[280px]'>
            <div className=''>
                <img src={img} />
            </div>
            <div className='font-medium text-lg my-1'>{title}</div>
            <div className='text-lg font-medium gap-1 flex items-center'>
                <div>{pricesell}</div>
                <delete className='font-normal text-sm line-through text-gray-500'>{pricedis}</delete>
            </div>
            <div className='text-gray-500 flex text-lg my-1'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
        </div>
    )
}

export default Card