import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

import React from 'react'
import Container from './Container'

const HeroSection = () => {
    return (
        <div className='py-[128px] flex items-center gap-4 bg-[#E0F8F2]' id='home'>

            {/* left-content */}
            <div className='w-[60%] flex justify-end'>
                <div className='max-w-[800px] '>
                    <h1 className='font-inter font-bold text-[82px] leading-[96px] tracking-[0%]'>Meet your <br />
                        <span className="font-['Covered_By_Your_Grace'] font-normal text-[#009387]">favorite</span> new (old) marketing channel.</h1>
                    <p className="font-inter font-medium text-[20px] leading-[34px] tracking-[0%] my-4"
                    >Remarkable results. Easier than email. Postcard marketing reinvented for modern ecommerce.</p>
                    <div className='flex '>

                    <button className='border-2 border-[#2E2F35] px-[25px] py-[14px] rounded-2xl shadow-[3px_3px_0px_0px_#2E2F35] bg-[#ff6d2c] font-inter font-medium text-[15px] leading-[18px] tracking-[0%] text-center text-white hover:bg-[#2cffca] hover:text-black transition-colors duration-300'>TRY IT RISK-FREE</button>
                    <button className='ml-10'>
                        <img src="/stars.png" alt="" />
                    5.0 Shopify Rating
                    </button>
                    </div>
                </div>
            </div>
            {/* image Section */}
            <div className='flex justify-end w-[40%]'>
                <img src="/heroimage.png" alt="" />
            </div>

        </div>
    )
}

export default HeroSection



