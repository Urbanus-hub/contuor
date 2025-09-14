import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='bg-[#EFF2F1]'>
      <div className='w-full lg:h-[75vh] h-auto bg-[#3B5D50] px-5 sm:px-10 md:px-16 lg:px-25 flex lg:flex-row flex-col items-center lg:justify-between justify-center py-10 lg:py-0 mb-5'>
        {/* content */}
        <div className='lg:w-[35%] w-full flex flex-col gap-5 text-center lg:text-left'>
          <h1 className="text-white lg:text-5xl text-2xl sm:text-3xl md:text-4xl font-black mb-[30px] lg:mb-0 mt-10 lg:mt-0">Contact</h1>
          <p className='text-[#9DAEA2] mb-[24px] text-sm md:text-base'>We’d love to hear from you! Reach out with your questions, ideas, or feedback—our team is here to help you create your perfect space.
</p>
          <div className='flex flex-col sm:flex-row gap-5 justify-center lg:justify-start'>
            <button className='px-8 py-3 rounded-full bg-[#F8B810] border-0 font-medium text-[17px] cursor-pointer'>Shop Now</button>
            <button className='px-8 py-3 border-2 rounded-full border-white/50 cursor-pointer text-white'>Explore</button>
          </div>
        </div>
        
        {/* hero img */}
        <div className='lg:w-[55%] w-full h-[300px] md:h-[400px] lg:h-full flex-col items-end justify-end relative mt-10 lg:mt-0'>
          <img src="images/dots-light.svg" alt="" className='absolute right-[-50px] lg:right-[-100px] top-10 lg:top-22 hidden md:block' />
          <img src="images/couch.png" alt=""  className='absolute lg:top-16 top-0 right-[-10px] lg:right-[-10px] z-3 w-full h-full object-contain'/>
        </div>
      </div>

       <ContactForm/>
    </div>
  )
}

export default Contact