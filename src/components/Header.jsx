
"use client";

import React, { useEffect, useState } from 'react'
import Container from './Container'
import Link from 'next/link'
import AuthModal from './AuthModal';

const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [authType, setAuthType] = useState("login");
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check if the user is already logged in or registered
        const storedUser = JSON.parse(localStorage.getItem("userData"));

        if (storedUser) {
            setUser(storedUser);  // Set the logged-in user's info
        }
        // const timer = setTimeout(() => {
           
        //     setModalOpen(true);
           
        // }, 3000);

        return () => clearTimeout(timer); // Cleanup the timer when the component is unmounted
    }, []);
    const handleLogout = () => {
        setUser(null);  // Clear user from state
        // setModalOpen(true);
    };
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
                        {/* Conditionally render buttons based on user state */}
                        {user ? (
                            <div className='flex items-center gap-4'>
                            <span className='text-red-700 font-bold text-lg'>Hello, {user.username}</span>
                                <button
                                     onClick={handleLogout} 
                                    className='border-2 border-[#2E2F35] px-[25px] py-[14px] rounded-2xl shadow-[3px_3px_0px_0px_#2E2F35] font-inter font-medium text-[15px] leading-[18px] tracking-[0%] text-center text-[#2E2F35] hover:bg-gray-600 hover:text-white transition-colors duration-300'>
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className='flex items-center gap-4'>
                            <button onClick={() => { setAuthType("login"); setModalOpen(true); }} className='border-2 border-[#2E2F35] px-[25px] py-[14px]  rounded-2xl shadow-[3px_3px_0px_0px_#2E2F35] font-inter font-medium text-[15px] leading-[18px] tracking-[0%] text-center text-[#2E2F35] hover:bg-gray-600 hover:text-white transition-colors duration-300'>Login</button>

                            <button onClick={() => { setAuthType("signup"); setModalOpen(true); }} className='border-2 border-[#2E2F35] px-[25px] py-[14px] rounded-2xl shadow-[3px_3px_0px_0px_#2E2F35] bg-[#ff6d2c] font-inter font-medium text-[15px] leading-[18px] tracking-[0%] text-center text-white hover:bg-[#2cffca] hover:text-black transition-colors duration-300'>Create free account</button>
                            </div>
                        ) 
                         }
                     
                        <AuthModal open={modalOpen} onClose={() => setModalOpen(false)} type={authType} setAuthType={setAuthType}  />
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Header


