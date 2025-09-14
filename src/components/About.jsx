import React,{useContext} from 'react'
import WhyUsCard from './WhyUsCard'
import OurTeam from './OurTeam'
import Testimonials from './Testimonials'


const About = () => {
 
  return (
    <div className='bg-[#DCE5E4]'>
<div className='w-full lg:h-[75vh] h-auto bg-[#3B5D50] px-5 sm:px-10 md:px-16 lg:px-25 flex lg:flex-row flex-col items-center lg:justify-between justify-center py-10 lg:py-0 mb-5'>
        {/* content */}
        <div className='lg:w-[35%] w-full flex flex-col gap-5 text-center lg:text-left'>
          <h1 className="text-white lg:text-5xl text-2xl sm:text-3xl md:text-4xl font-black mb-[30px] lg:mb-0 mt-10 lg:mt-0">About us</h1>
          <p className='text-[#9DAEA2] mb-[24px] text-sm md:text-base'>Our story is rooted in a love for beautiful, functional spaces. We believe in thoughtful design, quality craftsmanship, and creating furniture that feels like home. Learn more about our journey, our values, and the team dedicated to bringing your vision to life.
.</p>
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
      <WhyUsCard/>
   {/* our team */}
   <div className='flex flex-wrap w-full lg:px-25 justify-between py-10'>

   <OurTeam/>

   </div>
   <div>
    <Testimonials/>
   </div>

    </div>
  )
}

export default About