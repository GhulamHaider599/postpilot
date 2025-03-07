import React from 'react'
import Container from './Container'

const Directmail = () => {
    return (
        <div className='py-14 bg-[#E0F8F2]' id='workflow'>

            <Container>
                <h2 className="font-inter font-bold text-[63px] leading-[76px] tracking-[-2px] text-center"
                >Why use direct mail? <br />It 
                    <span className="font-['Covered_By_Your_Grace'] font-normal text-[#009387] "> works</span> like crazy.</h2>
                {/* Below Content */}
                <div className='flex gap-13 items-center mt-[30px]'>
                    <div className='w-1/3 '>
                            <h3 className="font-inter font-bold text-[63px] leading-[75px] tracking-[-2px] text-center align-middle"
                            >28X</h3>
                            <p className="font-inter font-medium text-[14px] leading-[22px] tracking-[0%] text-center align-middle"
                            >Higher response rate than email & digital</p>
                    </div>
                    <div className='w-1/3  flex flex-col  items-center'>
                            <img src="/direct-mail.png"   alt="" />
                            <p className="font-inter font-medium text-[14px] leading-[22px] tracking-[0%] text-center align-middle"
                            >Your messages get read</p>
                    </div>
                    <div className='w-1/3 '>
                        <h3 className="font-inter font-bold text-[62px] leading-[75px] tracking-[-2px] text-center align-middle"
                        >17 Days</h3>
                        <p className="font-inter font-medium text-[14px] leading-[22px] tracking-[0%] text-center align-middle"
                        >Lifespan of a postcard vs. seconds for email or SMS</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Directmail