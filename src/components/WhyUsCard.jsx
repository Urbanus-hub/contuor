 
import React,{useContext} from 'react'
import { CraftContext } from '../App'

export function WhyUs({image,title,description}){
  return(
    <div className='w-full md:w-[45%] h-auto md:h-[30vh] relative flex flex-col p-4 mb-6 md:mb-0'>
      <div className='relative w-10 h-10 ml-4 mt-3 mb-5 bg-[#DCE5E4] rounded-full'>
        <img src={image} alt=""  className='absolute left-[-20px] top-[-7px] w-10 h-10'/>
      </div>
      
      <div className='flex-col'>
        <h3 className='text-[14px] md:text-base font-medium mb-[14px]'>{title}</h3>
        <p className='text-[14px] md:text-base text-black/70 pr-3'>{description}</p>
      </div>
    </div>
  )
}

function WhyUsCard(){
    const whyUs=useContext(CraftContext)
  return(
    <div className='w-full px-5 sm:px-10 md:px-16 lg:px-25 h-auto lg:h-[100vh] flex flex-col lg:flex-row justify-between py-10 lg:py-0 lg:mb-25  '>
        <div className='w-full lg:w-[60%] mb-10 lg:mb-0'>
          <div className="mt-0 lg:mt-10 mb-10">
            <h2 className='text-2xl md:text-3xl font-medium mb-4 text-center lg:text-left'>Why choose us</h2>
            <p className='mb-6 text-[14px] md:text-base text-black/70 font-serif text-center lg:text-left'>We believe in thoughtful design, exceptional quality, and creating spaces that feel like home from the very first moment.</p>
          </div>
          <div className='w-full flex flex-col md:flex-row md:flex-wrap gap-4 lg:gap-[30px]'>
            {whyUs.map((item,index)=>(<WhyUs key={index} image={item.image} title={item.title} description={item.description}/>))}
          </div>
        </div>

        <div className='w-full lg:w-[50%] relative h-[400px] lg:h-auto'>
          <img src="images/dots-yellow.svg" alt="" className='absolute z-0 hidden lg:block'/>
          <img src="images/why-choose-us-img.jpg" alt="" className="w-full lg:w-[90%] h-full lg:h-[85%] lg:ml-[50px] lg:my-[100px] rounded-3xl absolute lg:relative z-2 object-cover"/>
        </div>
      </div>
  )
}
export default WhyUsCard