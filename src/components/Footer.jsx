import React from 'react'

const Footer = () => {
  return (
    <div className='w-full px-5 sm:px-10 md:px-16 lg:px-25 h-auto py-10 flex flex-col justify-around bg-white'>
      {/* reach out form */}
      <div className="w-full flex flex-col lg:flex-row justify-between h-auto lg:h-[20vh] mt-8 lg:mt-15 items-center relative mb-10 lg:mb-0">
        {/* input fields */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className='flex mb-4 items-center justify-center lg:justify-start'>
            <img src="images/envelope-outline.svg" alt="" className='mr-2' />
            <h3 className='text-[#3B5D50] text-lg md:text-xl font-medium'>
              Subscribe to Newsletter
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <input 
              type="text"  
              placeholder='Enter your name' 
              className='w-full sm:w-auto border border-black/10 px-4 py-3 rounded-md text-[14px] focus:border-[#3B5D50] outline-0'
            />
            <input 
              type="email"  
              placeholder='Enter your email' 
              className="w-full sm:w-auto border px-4 py-3 rounded-md border-black/10 text-[14px] focus:border-[#3B5D50] outline-0"
            />
            <button className="w-full sm:w-auto bg-[#3B5D50] px-6 py-3 rounded-md hover:bg-[#2f493f] flex items-center justify-center">
              <img src="images/envelope-outline.svg" alt="" />
            </button>
          </div>
        </div>
        {/* sofa images */}
        <div className='hidden lg:block absolute right-4 top-[-200px]'>
          <img src="images/sofa.png" alt="sofa" className='h-80 w-96 lg:h-90 lg:w-102'/>
        </div>
      </div>

      {/* quick links */}
      <div className='h-auto lg:h-[45vh] w-full flex flex-col lg:flex-row items-start lg:items-center justify-between py-10 lg:py-0'>
        {/* brand and social */}
        <div className='w-full lg:w-[30%] h-auto lg:h-[80%] flex flex-col justify-start lg:justify-around mb-10 lg:mb-0'>
          <h2 className='text-[#3B5D50] text-2xl lg:text-xl font-semibold mb-4 lg:mb-0 text-center lg:text-left'>
            Contuor.
          </h2>
          <p className='mb-6 text-[14px] md:text-[16px] text-black/50 pr-0 lg:pr-5 font-serif text-center lg:text-left'>
            Contuor brings timeless elegance and modern comfort to your home. Each piece is thoughtfully designed to inspire, crafted with care, and made to last for generations.
          </p>
          
          {/* socials */}
          <div className='flex w-full sm:w-1/2 lg:w-1/2 items-center justify-center lg:justify-around mx-auto lg:mx-0 gap-4'>
            {/* Facebook */}
            <div className='w-10 h-10 rounded-full bg-[#EFF2F1] flex items-center justify-center hover:bg-[#DCE5E4] transition-colors cursor-pointer'>
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path fill="#3B5D50" d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"/>
              </svg>
            </div>

            {/* Twitter/X */}
            <div className='w-10 h-10 rounded-full bg-[#EFF2F1] flex items-center justify-center hover:bg-[#DCE5E4] transition-colors cursor-pointer'>
              <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="#3B5D50" d="M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z"/>
              </svg>
            </div>

            {/* Instagram */}
            <div className='w-10 h-10 rounded-full bg-[#EFF2F1] flex items-center justify-center hover:bg-[#DCE5E4] transition-colors cursor-pointer'>
              <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="#3B5D50" d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
            </div>

            {/* LinkedIn */}
            <div className='w-10 h-10 rounded-full bg-[#EFF2F1] flex items-center justify-center hover:bg-[#DCE5E4] transition-colors cursor-pointer'>
              <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path fill="#3B5D50" d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* links */}
        <div className="w-full lg:w-[65%] h-auto lg:h-[80%] grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-4">
          {/* About Links */}
          <div className='flex flex-col space-y-4'>
            <h4 className='text-[#3B5D50] font-semibold mb-2 text-center lg:text-left'>About</h4>
            <ul className='flex flex-col space-y-3'>
              <li className="text-black/70 text-sm md:text-base hover:text-black/50 cursor-pointer text-center lg:text-left">About us</li>
              <li className="text-black/70 text-sm md:text-base hover:text-black/50 cursor-pointer text-center lg:text-left">Services</li>
              <li className="text-black/70 text-sm md:text-base hover:text-black/50 cursor-pointer text-center lg:text-left">Blog</li>
              <li className="text-black/70 text-sm md:text-base hover:text-black/50 cursor-pointer text-center lg:text-left">Contact us</li>
            </ul>
          </div>

          {/* Support Links */}
          <div className='flex flex-col space-y-4'>
            <h4 className='text-[#3B5D50] font-semibold mb-2 text-center lg:text-left'>Support</h4>
            <ul className='flex flex-col space-y-3'>
              <li className="text-black/70 text-sm md:text-base hover:text-black/50 cursor-pointer text-center lg:text-left">Support</li>
              <li className="text-black/70 text-sm md:text-base hover:text-black/50 cursor-pointer text-center lg:text-left">Knowledge base</li>
              <li className="text-black/70 text-sm md:text-base hover:text-black/50 cursor-pointer text-center lg:text-left">Live chat</li>
            </ul>
          </div>

          {/* Company Links */}
          <div className='flex flex-col space-y-4'>
            <h4 className='text-[#3B5D50] font-semibold mb-2 text-center lg:text-left'>Company</h4>
            <ul className='flex flex-col space-y-3'>
              <li className="text-black/70 text-sm md:text-base hover:text-black/50 cursor-pointer text-center lg:text-left">Jobs</li>
              <li className="text-black/70 text-sm md:text-base hover:text-black/50 cursor-pointer text-center lg:text-left">Our team</li>
              <li className="text-black/70 text-sm md:text-base hover:text-black/50 cursor-pointer text-center lg:text-left">Leadership</li>
              <li className="text-black/70 text-sm md:text-base hover:text-black/50 cursor-pointer text-center lg:text-left">Privacy Policy</li>
            </ul>
          </div>

          {/* Products Links */}
          <div className='flex flex-col space-y-4'>
            <h4 className='text-[#3B5D50] font-semibold mb-2 text-center lg:text-left'>Products</h4>
            <ul className='flex flex-col space-y-3'>
              <li className="text-black/70 text-sm md:text-base hover:text-black/50 cursor-pointer text-center lg:text-left">Nordic Chair</li>
              <li className="text-black/70 text-sm md:text-base hover:text-black/50 cursor-pointer text-center lg:text-left">Kruzo Aero</li>
              <li className="text-black/70 text-sm md:text-base hover:text-black/50 cursor-pointer text-center lg:text-left">Ergonomic chair</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='h-auto lg:h-[20vh] w-full flex flex-col lg:flex-row justify-between items-center py-5 border-t border-gray-400 mt-10'>
        <p className='w-full lg:w-1/2 text-[12px] md:text-[14px] text-gray-600 text-center lg:text-left mb-4 lg:mb-0'>
          Copyright ©2025. All Rights Reserved. — Designed with love by Urbanus Kioko
        </p>
        <div className='w-full lg:w-auto flex flex-col sm:flex-row justify-center lg:justify-between items-center gap-4 lg:gap-8'>
          <p className='text-[12px] md:text-[14px] text-gray-800 hover:text-gray-600 cursor-pointer'>Terms & Conditions</p>
          <p className='text-[12px] md:text-[14px] text-gray-800 hover:text-gray-600 cursor-pointer'>Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer