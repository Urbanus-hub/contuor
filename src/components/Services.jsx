import React,{useContext} from 'react'
import { WhyUs } from './WhyUsCard'
import { CraftContext } from '../App';
import Testimonials from './Testimonials';

const Services = () => {
  const data=useContext(CraftContext);
  const whyUs=[...data,...useContext(CraftContext)];
  
  return (
    <div className='bg-[#EFF2F1]'>
      <div className='w-full lg:h-[75vh] h-auto bg-[#3B5D50] px-5 sm:px-10 md:px-16 lg:px-25 flex lg:flex-row flex-col items-center lg:justify-between justify-center py-10 lg:py-0 mb-5'>
        {/* content */}
        <div className='lg:w-[35%] w-full flex flex-col gap-5 text-center lg:text-left'>
          <h1 className="text-white lg:text-5xl text-2xl sm:text-3xl md:text-4xl font-black mb-[30px] lg:mb-0 mt-10 lg:mt-0">Services</h1>
          <p className='text-[#9DAEA2] mb-[24px] text-sm md:text-base'>Experience personalized interior solutions, expert consultations, and seamless delivery. Our team is dedicated to helping you bring your vision to life—every step of the way.
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
      
      <div className='w-full px-5 py-20 sm:px-10 md:px-16 lg:px-25 flex flex-col md:flex-row md:flex-wrap lg:flex-wrap gap-4 lg:gap-[30px] bg-[#EFF2F1]'>
        {whyUs.map((item,index)=>(
          <div key={index} className='w-full md:w-[45%] lg:w-[22%] h-auto md:h-[30vh] relative flex flex-col p-4 mb-6 md:mb-0'>
            <div className='relative w-10 h-10 ml-4 mt-3 mb-5 bg-[#DCE5E4] rounded-full'>
              <img src={item.image} alt=""  className='absolute left-[-20px] top-[-7px] w-10 h-10'/>
            </div>
            
            <div className='flex-col'>
              <h3 className='text-[14px] md:text-base font-medium mb-[14px]'>{item.title}</h3> 
              <p className='text-[14px] md:text-base text-black/70 pr-3'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Testimonials/>
    </div>
  )
}

export default Services