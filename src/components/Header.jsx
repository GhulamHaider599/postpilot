
"use client";
import { useState } from "react";
import React from 'react'
import Container from './Container'
import Link from 'next/link'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className=' fixed top-0 left-0 w-full bg-white shadow-md z-50'>


            <Container>
                {/* left-logo */}
                
                <div className='flex  justify-between h-[65px]  leading-[65px]'>

                    <figure className='flex items-center'>
                        <img src="/postlogo.svg" alt="" />
                    </figure>
                    {/* right-side */}
                    <div className='flex items-center gap-4'>
                        <ul className='flex space-x-6 font-["inter"] font-medium text-[15px]  text-center text-[#2E2F35]'>
                            <li>
                                <Link href="#home" className="scroll-link text-gray-700 hover:text-black">Home</Link>
                            </li>
                            <li>
                                <Link href="#clients" className="scroll-link text-gray-700 hover:text-black">Our Clients</Link>
                            </li>
                            <li>
                                <Link href="#workflow" className="scroll-link text-gray-700 hover:text-black">Work Flow</Link>
                            </li>
                            <li>
                                <Link href="#reviews" className="scroll-link text-gray-700 hover:text-black">Reviews</Link>
                            </li>
                            <li>
                                <Link href="#contact" className="scroll-link text-gray-700 hover:text-black">Contact Us</Link>
                            </li>
                         
                        </ul>
                        {/* buttons */}
                        <button className='border-2 border-[#2E2F35] px-[25px] py-[14px]  rounded-2xl shadow-[3px_3px_0px_0px_#2E2F35] font-inter font-medium text-[15px] leading-[18px] tracking-[0%] text-center text-[#2E2F35] hover:bg-gray-600 hover:text-white transition-colors duration-300'>Login</button>

                        <button className='border-2 border-[#2E2F35] px-[25px] py-[14px] rounded-2xl shadow-[3px_3px_0px_0px_#2E2F35] bg-[#ff6d2c] font-inter font-medium text-[15px] leading-[18px] tracking-[0%] text-center text-white hover:bg-[#2cffca] hover:text-black transition-colors duration-300'>Create free account</button>

                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Header