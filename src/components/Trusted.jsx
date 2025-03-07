

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import Container from "./Container";

const Trusted = () => {
    const images = [
        {
            id: 1,
            imgSrc: "/trust-01.png",
            brandSrc: "/text-01.png",
            logoWidth : "50%"
        },
        {
            id: 2,
            imgSrc: "/trust-02.png",
            brandSrc: "/text-02.png",
            logoWidth : "50%"
        },
        {
            id: 3,
            imgSrc: "/trust-03.png",
            brandSrc: "/text-03.png",
            logoWidth : "50%"
        },
        {
            id: 4,
            imgSrc: "/trust-04.png",
            brandSrc: "/text-04.png",
            logoWidth : "25%"
        },
    ];

    return (
        <div id='clients bg-white'>

        <Container className="py-14 relative" >
            <h2 className="font-['inter'] font-bold text-[63px] leading-[76px] tracking-[-2px] text-center mb-3"
            >Trusted by thousands <br />
                of top DTC <span className="font-['Covered_By_Your_Grace'] font-normal text-[#009387]">brands.</span>
            </h2>

            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                >
                {images.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="flex flex-col items-center">
                            <img className="w-full" src={item.imgSrc} alt="Brand Logo" />
                            <img className="my-2 mx-auto" style={{width: `${item.logoWidth}`}} src={item.brandSrc} alt="Brand Name"/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

       
        </Container>
                </div>
    );
};

export default Trusted;
