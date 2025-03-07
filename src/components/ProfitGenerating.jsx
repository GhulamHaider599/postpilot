import React from 'react'
import Container from './Container'

const ProfitGenerating = () => {
    return (
        <div className='bg-[#FDF3EA] py-[86px]' id='reviews'>

            <Container>



                <h2 className="font-['inter'] font-bold text-[63px] leading-[55px] tracking-[-2px] text-center mx-auto align-middle w-[70%] text-black"
                >PostPilot makes it a <span className="font-['Covered_By_Your_Grace'] font-normal text-[63px] leading-[55px] tracking-[-2px] text-center align-middle text-[#009387]">cinch</span> to send personalized, profit-generating postcards.</h2>
                <div className='w-[40%] my-10 '>
                    <h3 className="font-['Covered_By_Your_Grace'] font-normal text-[63px] leading-12  tracking-[-4px] align-middle text-[#009387]">Powerful <br />
                        <span className="font-['inter'] font-bold text-[60px] leading-12  tracking-[-4px] align-middle text-[#2E2F35]"> acquisition <br /> & retention</span></h3>

                    <p className="font-['inter'] font-medium text-[20px] leading-[34px] tracking-[0%] align-middle text-[#58595D]">Send one-off or triggered campaigns to customers & prospects. Target email leads with MailMatch™.</p>
                    <div className='border-2 rounded-2xl p-10 border-[#D1C7BE] relative mt-2'>
                        <img src="/comma.png" alt="" className='absolute -top-4 bg-[#FDF3EA]' />
                        <p className="font-['inter'] font-medium italic text-[16px] leading-[30px] tracking-[0%] align-middle text-black">It's like Klaviyo for direct mail. The results are absolutely insane.</p>
                        <div className='flex justify-between'>
                            <p className="font-['roboto'] font-normal text-[14px] leading-[22px] tracking-[0%] align-middle">Ash Melwani, CMO</p>
                            <img src="/obvi-logo.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className='flex justify-end'>


                    <div className='w-[40%] my-10 '>
                        <h3 className="font-['Covered_By_Your_Grace'] font-normal text-[63px] leading-12  tracking-[-4px] align-middle text-[#009387]">Fight <br />
                            <span className="font-['inter'] font-bold text-[60px] leading-14  tracking-[-4px] align-middle text-[#2E2F35]"> back against iOS updates, jacked-up <br /> CPCs & spam folders</span></h3>

                        <p className="font-['inter'] font-medium text-[20px] leading-[34px] tracking-[0%] align-middle text-[#58595D]">Deliver your message to all of your customers — for less than the cost of a click.</p>
                        <div className='border-2 rounded-2xl p-10 border-[#D1C7BE] relative mt-2'>
                            <img src="/comma.png" alt="" className='absolute -top-4 bg-[#FDF3EA]' />
                            <p className="font-['inter'] font-medium italic text-[16px] leading-[30px] tracking-[0%] align-middle text-black">PostPilot is our new weapon against sinking email engagement and rising PPC costs. The results and ROI have been outstanding. It’s now one of our core marketing channels to increase acquisition & LTV.</p>
                            <div className='flex justify-between'>
                                <p className="font-['roboto'] font-normal text-[14px] leading-[22px] tracking-[0%] align-middle">Leah Keith, GM</p>
                                <img src="/tiger.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[40%] my-10 '>
                    <h3 className="font-['inter'] font-bold text-[60px] leading-14  tracking-[-4px] align-middle text-[#2E2F35]">Done for
                        <span className="font-['Covered_By_Your_Grace'] font-normal text-[63px] leading-12  tracking-[-4px] align-middle text-[#009387]"> you </span></h3>

                    <p className="font-['inter'] font-medium text-[20px] leading-[34px] tracking-[0%] align-middle text-[#58595D] mt-2">From design & strategy to stamp-licking, our ecom experts help you every step of the way.</p>
                    <div className='border-2 rounded-2xl p-10 border-[#D1C7BE]  relative mt-2'>
                        <img src="/comma.png" alt="" className='absolute -top-4 bg-[#FDF3EA]' />
                        <p className="font-['inter'] font-medium italic text-[16px] leading-[30px] tracking-[0%] align-middle text-black">The team is so knowledgeable and beyond helpful. I’m blown away by their communication, detail, and attentiveness and always feel like they have our best interest in mind. Definitely worth a try.</p>
                        <div className='flex justify-between'>
                            <p className="font-['roboto'] font-normal text-[14px] leading-[22px] tracking-[0%] align-middle">Holly Davies, Marketing Director</p>
                            <img src="/paragon.png" alt="" />
                        </div>
                    </div>
                </div>

                <button className='border-2 border-[#2E2F35] px-[25px] py-[14px] rounded-2xl shadow-[3px_3px_0px_0px_#2E2F35] bg-[#ff6d2c] hover:bg-[#2cffca] hover:text-black transition-colors duration-300 font-["inter"] font-medium text-[12px] leading-[18px] tracking-[0%] text-center text-white'>TRY IT RISK-FREE</button>

            </Container>
        </div>
    )
}

export default ProfitGenerating