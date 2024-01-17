import React from 'react'
import { IoPencil } from 'react-icons/io5'
import { MdLocationOn } from 'react-icons/md'
import headerImage from "../assests/headerImage.png"
import headerImageMobile from "../assests/headerImageMobile.png"
import offer1Image from "../assests/offer1.png"
import offer1Mobile from "../assests/offer1Mobile.png"
import Box from '../components/Box'
import { Link } from 'react-router-dom'
import { Dealoftheday, accessoriesData } from '../data'


import s1 from "../assests/toptrend.png"
import s2 from "../assests/mobile.avif"
import s3 from "../assests/televisons.avif"
import s4 from "../assests/laptops.avif"
import s5 from "../assests/audio.png"
import s6 from "../assests/airConditioners.avif"
import s7 from "../assests/refrigerators.avif"
import s8 from "../assests/washing.avif"
import s9 from "../assests/kitchen.avif"
import s10 from "../assests/grooming.avif"
import s11 from "../assests/tablets.avif"
import s12 from "../assests/cameras.avif"
import s13 from "../assests/accessories.avif"
import s14 from "../assests/gaming.avif"
import s15 from "../assests/toptrend.png"
import SliderAuto from '../components/SliderAuto'


import hightlights1 from "../assests/hightlights1.avif"
import hightlights2 from "../assests/hightlights2.avif"
import hightlights3 from "../assests/hightlights3.avif"

import hightlight4 from "../assests/hightlight4.avif"
import hightlight5 from "../assests/hightlight5.avif"
import hightlight6 from "../assests/hightlight6.avif"
import hightlight7 from "../assests/hightlight7.avif"

import hightlight8 from "../assests/hightlight8.webp"
import hightlight9 from "../assests/hightlight9.avif"
import hightlight10 from "../assests/hightlight10.avif"
import hightlight11 from "../assests/hightlight11.avif"


import newatcroma1 from "../assests/newatcroma1.avif"
import newatcroma2 from "../assests/newatcroma2.avif"

import newatcroma3 from "../assests/newatcroma3.avif"
import newatcroma4 from "../assests/newatcroma4.avif"
import newatcroma5 from "../assests/newatcroma5.avif"
import newatcroma6 from "../assests/newatcroma6.avif"
import newatcroma7 from "../assests/newatcroma7.avif"
import newatcroma8 from "../assests/newatcroma8.avif"
import newatcroma9 from "../assests/newatcroma9.avif"
import newatcroma10 from "../assests/newatcroma10.avif"
import newatcroma11 from "../assests/newatcroma11.avif"
import newatcroma12 from "../assests/newatcroma12.avif"
import Card from '../components/Card'



const Home = () => {
    return (
        <div className='text-white'>
            <div className="flex items-center gap-2 md:hidden 10 bg-black text-white">
                <MdLocationOn className='text-xl' />
                <p className='whitespace-nowrap text-sm'>Surat 395005</p>
                <IoPencil className='text-xs' />
            </div>

            <div>
                <img src={headerImage} className="hidden md:block" />
                <img src={headerImageMobile} className="block md:hidden" />
            </div>

            <Box>
                <div className='p-5 '>
                    <img src={offer1Image} className="rounded-md overflow-hidden hidden md:block" />
                    <img src={offer1Mobile} className="rounded-md overflow-hidden block md:hidden" />
                </div>

                <SliderAuto width={125}>
                    <div className='flex gap-3 md:gap-6'>
                        <img src={s1} className="w-14 md:min-w-[125px]" />
                        <img src={s2} className="w-14 md:min-w-[125px]" />
                        <img src={s3} className="w-14 md:min-w-[125px]" />
                        <img src={s4} className="w-14 md:min-w-[125px]" />
                        <img src={s5} className="w-14 md:min-w-[125px]" />
                        <img src={s6} className="w-14 md:min-w-[125px]" />
                        <img src={s7} className="w-14 md:min-w-[125px]" />

                    </div>
                    <div className='flex'>
                        <img src={s8} className="w-14 md:min-w-[125px]" />
                        <img src={s9} className="w-14 md:min-w-[125px]" />
                        <img src={s10} className="w-14 md:min-w-[125px]" />
                        <img src={s11} className="w-14 md:min-w-[125px]" />
                        <img src={s12} className="w-14 md:min-w-[125px]" />
                        <img src={s13} className="w-14 md:min-w-[125px]" />
                        <img src={s14} className="w-14 md:min-w-[125px]" />

                    </div>
                </SliderAuto>

                <h2 className='font-medium text-2xl my-5'>Deals of the Day</h2>
                <div>
                    <SliderAuto width={285}>
                        {
                            Dealoftheday.map(el =>{
                                return(
                                  <Card
                                    key={el.id}
                                    id = {el.id}
                                    title ={el.title}
                                    img  = {el.img}
                                    pricesell = {el.priceSell}
                                    pricedis = {el.priceDis}
                                  />  
                                )
                            })
                        }
                    </SliderAuto>
                </div>


                {/* Highlights */}
                <h2 className='font-medium text-2xl my-5'>Highlights</h2>
                <div className='md:px-5 flex justify-between gap-3 my-5 overflow-scroll scrollbar-none'>
                    <img src={hightlights1} className="h-44 md:h-60 rounded-lg" />
                    <img src={hightlights2} className="h-44 md:h-60 rounded-lg" />
                    <img src={hightlights3} className="h-44 md:h-60 rounded-lg" />
                </div>

                <SliderAuto width={380} isflex="flex">
                    <img src={hightlight4} className="h-44 min-h-[176px] md:min-h-[240px] md:h-60 rounded-lg" />
                    <img src={hightlight5} className="h-44 md:h-60 rounded-lg " />
                    <img src={hightlight6} className="h-44 md:h-60 rounded-lg " />
                    <img src={hightlight7} className="h-44 md:h-60 rounded-lg " />
                </SliderAuto>

                <SliderAuto width={380} isflex="flex">
                    <img src={hightlight8} className="h-44 md:h-60 rounded-lg " />
                    <img src={hightlight9} className="h-44 md:h-60 rounded-lg " />
                    <img src={hightlight10} className="h-44 md:h-60 rounded-lg " />
                    <img src={hightlight11} className="h-44 md:h-60 rounded-lg " />
                </SliderAuto>

                {/* New at croma */}
                <h2 className='font-medium text-2xl my-5'>New at Croma</h2>
                <div className='flex gap-3'>
                    <img src={newatcroma1} className="w-1/2 rounded-lg" />
                    <img src={newatcroma2} className="w-1/2 rounded-lg" />
                </div>

                <SliderAuto width={245} isflex="flex">
                    <img src={newatcroma3} className="h-44 md:h-60 rounded-lg " />
                    <img src={newatcroma4} className="h-44 md:h-60 rounded-lg " />
                    <img src={newatcroma5} className="h-44 md:h-60 rounded-lg " />
                    <img src={newatcroma6} className="h-44 md:h-60 rounded-lg " />
                    <img src={newatcroma7} className="h-44 md:h-60 rounded-lg " />
                    <img src={newatcroma8} className="h-44 md:h-60 rounded-lg " />
                    <img src={newatcroma9} className="h-44 md:h-60 rounded-lg " />
                    <img src={newatcroma10} className="h-44 md:h-60 rounded-lg " />
                    <img src={newatcroma11} className="h-44 md:h-60 rounded-lg " />
                    <img src={newatcroma12} className="h-44 md:h-60 rounded-lg " />
                </SliderAuto>

                {/* Accessories under 999 */}
                <h2 className='font-medium text-2xl my-5'>Accessories under 999</h2>
                <div>
                    <SliderAuto width={285}>
                        {
                            accessoriesData.map(el =>{
                                return(
                                  <Card
                                    key={el.id}
                                    id = {el.id}
                                    title ={el.title}
                                    img  = {el.img}
                                    pricesell = {el.priceSell}
                                    pricedis = {el.priceDis}
                                  />  
                                )
                            })
                        }
                    </SliderAuto>
                </div>

            </Box>

        </div>
    )
}

export default Home