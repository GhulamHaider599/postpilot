import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <div className='bg-white'>


    <Container className='py-20' >
      <div className='flex gap-[128px] mb-15' id='contact'  >
        <div className='w-[30%] '>
          <img src="/friendly-logo.png" alt="" />
          <p className='mt-3'>Our paper is sourced from FSC-certified mills. We plant enough trees to more than double our paper usage.</p>
        </div>

        <div className='w-[20%]'>
          <h5 className='py-2 font-bold'>COMPANY</h5>
          <ul className='flex flex-col gap-3'>
            <li>About Us</li>
            <li>Partner Program</li>
            <li>Career</li>
            <li>Contact Us</li>
            <li>Privacy policy</li>

          </ul>
        </div>

        <div className='w-[20%] '>

          <ul className='flex flex-col gap-3'>
            <li>Pricing</li>
            <li>Reviews</li>
            <li>Direct Mail Academy </li>
            <li>Success stories</li>
            <li>Terms & Conditions</li>

          </ul>
        </div>

        <div className='w-[30%] '>
          <h5 className='py-2 font-bold'>CONTACT</h5>
          <div className='flex flex-col gap-3'>

            <p className='flex '>
              <img src="/email.png" alt="" className='mr-2' />
              support@postpilot.com</p>
            <p>Printed with ❤️️️ at our facility in South Carolina.</p>
          </div>
        </div>
      </div>

      <hr  />
      {/* Below Footer */}
      <div className='flex justify-between my-4'>
        <div>
          <img src="/postlogo.svg" alt="" />
          <p>© 2022 PostPilot, Inc. All rights reserved.</p>
        </div>
        <div className='space-x-2'>
          <button className='border-2 border-[#2E2F35] px-[25px] py-[14px]  rounded-2xl shadow-[3px_3px_0px_0px_#2E2F35] font-inter font-medium text-[15px] leading-[18px] tracking-[0%] text-center text-[#2E2F35] bg-white hover:bg-gray-600 hover:text-white transition-colors duration-300'>Login</button>

          <button className='border-2 border-[#2E2F35] px-[25px] py-[14px] rounded-2xl shadow-[3px_3px_0px_0px_#2E2F35] bg-[#ff6d2c] hover:bg-[#2cffca] hover:text-black transition-colors duration-300 font-inter font-medium text-[15px] leading-[18px] tracking-[0%] text-center text-white'>Create free account</button>

        </div>
      </div>
    </Container>
    </div>
  )
}

export default Footer