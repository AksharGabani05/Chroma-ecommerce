import React from 'react'
import logo from "../assests/logo.svg"
import { IoMenuOutline, IoPencil } from "react-icons/io5"
import { CiSearch } from "react-icons/ci"
import { MdLocationOn } from "react-icons/md"
import { FaUser, FaShoppingCart } from "react-icons/fa"
import Box from './Box'

const Header = () => {
    return (
        <header className='bg-black text-white flex justify-between h-20'>
           

            <Box>
                <div className='hidden items-center justify-between w-full md:flex'>


                    <div className='p-3 flex items-center gap-12 w-4/5'>
                        <div className='w-32 min-w-[128px]'>
                            <img src={logo} className="w-full" />
                        </div>
                        <div className='flex items-center'>
                            <IoMenuOutline className='text-3xl' />
                            <p className='text-sm'>Menu</p>
                        </div>
                        <div className='flex items-center bg-white h-9 w-full max-w-md px-2 rounded-md'>
                            <input type="text" placeholder="What are you looking for ?" className='w-full bg-transparent outline-none border-none px-3 placeholder:text-sm text-black' />
                            <CiSearch className='text-black text-2xl ' />
                        </div>
                    </div>


                    <div className='flex items-center gap-9'>
                        <div className="flex items-center gap-2">
                            <MdLocationOn className='text-xl' />
                            <p className='whitespace-nowrap text-sm'>Surat 395005</p>
                            <IoPencil className='text-xs' />
                        </div>
                        <div className=' text-2xl'>
                            <FaUser />
                        </div>
                        <div className=' text-2xl relative'>
                            <FaShoppingCart />
                            <p className='text-xs w-3 text-center h-3 flex items-center justify-center rounded-full bg-greenblue absolute top-0 -right-2 text-black'>0</p>
                        </div>
                    </div>
                </div>


               
                <div className="md:hidden">
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-1'>
                            <div className='flex items-center'>
                                <IoMenuOutline className='text-3xl' />
                            </div>
                            <div className='w-20 '>
                                <img src={logo} className="w-full" />
                            </div>
                        </div>
                        <div className='flex items-center gap-3 mr-2'>
                            <div className=' text-xl'>
                                <FaUser />
                            </div>
                            <div className=' text-xl relative'>
                                <FaShoppingCart />
                                <p className='text-xs w-3 text-center h-3 flex items-center justify-center rounded-full bg-greenblue absolute top-0 -right-2 text-black'>0</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center bg-white h-7 w-full max-w-full px-2 mt-1 rounded-md'>
                        <input type="text" placeholder="What are you looking for ?" className='w-full bg-transparent outline-none border-none px-3 placeholder:text-sm text-black' />
                        <CiSearch className='text-black text-2xl ' />
                    </div>
                </div>
            </Box>






        </header>
    )
}

export default Header