import React from 'react'
function WhyUs({image,title,description}){
  return(
    <div className='w-[45%] h-[30vh]  relative flex-col'>
              <div className='relative w-10 h-10 ml-4 mt-3 mb-5 bg-[#DCE5E4] rounded-full'>
              <img src={image} alt=""  className='absolute left-[-20px] top-[-7px] w-10 h-10'/>
              </div>
              
              <div className='flex-col'>
                <h3 className='text-[14px] font-medium mb-[14px]'>{title}
</h3>
                <p className='text-[14px]  text-black/70 pr-3'>{description}</p>
              </div>
            </div>
  )
}

function CraftCard({image,title,price}){
  return(
    <div className='relative  w-[25%] h-[40%] flex flex-col justify-between rounded-md transition-all ease-in-out duration-300 hover:bg-[#DCE5E4] group'>
           <img src={image} alt="" className="absolute top-[-125px]"/>
            <div className='mt-[70%] flex flex-col items-center justify-center'>
              <h3 className='text-md font-medium'>{title}</h3>
              <p className="text-lg font-black text-black/75">${price}</p>
            </div>
            <button className='bg-black absolute bottom-[-20px] w-[40px] h-[40px] mx-auto right-[43%] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100'><img src="images/cross.svg" alt="" /></button>
          </div>
  )
}
function FurnitureInfo({image,title,description}){
  return(
    <div className='w-[30%] h-[95%] flex items-center justify-between mb-20'>
            <div className="w-[30%] bg-[#DCE5E4] h-[60%] relative rounded-2xl">

            <img src={image} alt=""  className='absolute top-[-10px] w-[300px] h-[120px]'/>
            </div>
            <div className='w-[65%]  flex flex-col items-start gap-3 h-[70%] justify-center'>
              <h3 className='text-[14px] font-semibold text-black/90'>{title}</h3>
              <p className='text-[14px] text-black/70 '>{description}</p>
              <a href="" className='text-black/75 text-[14px] hover:text-black/50'>Read more</a>
            </div>
           </div>
  )
}

const Home = () => {
  const crafts=[{
    image:"images/product-1.png",
    title:"Nordic Chair",
    price:50.00
  },{
    image:"images/product-2.png",
    title:"Cruzo Aero Chair",
    price:78.50
  },{
    image:"images/product-3.png",
    title:"Ergonomic Chair",
    price:43.00
  }]


  const furntureInfo=[{
    image:"images/product-1.png",
    title:"Nordic Chair",
    description:"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
   
  },{
    image:"images/product-2.png",
    title:"Cruzo Aero Chair",
    description:"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
   
  },{
    image:"images/product-3.png",
    title:"Ergonomic Chair",
    description:"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    
  }]
  const whyUS=[
    {
      image:"images/truck.svg",
      title:"Fast & Free Shipping",
      description:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
    },{
      image:"images/bag.svg",
      title:"Easy to Shop",
      description:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
    },{
      image:"images/support.svg",
      title:"24/7 Support",
      description:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
    },{
      image:"images/return.svg",
      title:"Hassle Free Returns",
      description:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
    }
  ]
  return (
    <div className='w-full bg-[#EFF2F1]'>
      {/* hero */}
      <div className='w-full h-[75vh] bg-[#3B5D50] px-25 flex items-center justify-between'>
        {/* content */}
        <div className='w-[35%] flex flex-col gap-5'>
          <h1 className="text-white text-5xl font-black mb-[30px]">Modern Interior Design Studio</h1>
          <p className='text-[#9DAEA2] mb-[24px]'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
          <div className='flex gap-5'>
            <button className='px-8 py-3 rounded-full bg-[#F8B810] border-0 font-medium text-[17px] cursor-pointer'>Shop Now</button>
            <button className='px-8 py-3 border-2 rounded-full border-white/50 cursor-pointer text-white '>Explore</button>
          </div>
        </div>
        {/* hero img */}
        

        <div className='w-[55%] flex-col items-end justify-end h-full relative'>
        <img src="images/dots-light.svg" alt="" className='absolute right-[-100px] top-22' />
          <img src="images/couch.png" alt=""  className='absolute top-16 z-3'/>
        </div>

      </div>

      {/* craft */}
      <div className="w-full px-25  h-[95vh] flex justify-between items-center ">
        <div className='w-[25%] flex flex-col   h-[90%] items-start justify-start mt-[200px]' >
         <h2 className='text-4xl mb-6 font-mono pr-30'>
          Crafted with excellent material.
         </h2>
         <p className='mb-6 text-[14px] text-black/70 pr-16'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
          <button className='px-6 py-3 border-2 rounded-full cursor-pointer text-white bg-black '>Explore</button>

        </div>
        {/* craft cards */}
        <div className='w-[70%]  h-[90%] flex items-center mt-10 justify-around '>
          {crafts.map((craft, index) => (
            <CraftCard key={index} image={craft.image} title={craft.title} price={craft.price} />
          ))}
          
         

        </div>

      </div>
      {/* why us */}
      <div className='w-full px-25 h-[100vh]  flex justify-between  mb-25'>
        <div className='w-[60%] '>
          <div className="mt-10 mb-10">
            <h2 className='text-3xl font-medium mb-4'>Why choose us </h2>
            <p className='mb-6 text-[14px] text-black/70 pr-5 font-serif'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
          </div>
          <div className='w-full flex flex-wrap gap-[30px]'>
            {
              whyUS.map((item,index)=>(<WhyUs key={index} image={item.image} title={item.title} description={item.description}/>))
            
            }
           

            
            
          </div>
        </div>

        <div className='w-[50%]  relative'>
          <img src="images/dots-yellow.svg" alt="" className='absolute z-0'/>
          <img src="images/why-choose-us-img.jpg" alt="" className="w-[90%] h-[85%] ml-[50px] my-[100px] rounded-3xl absolute z-2"/>

        </div>

      </div>
      {/* services */}
      <div className='w-full px-25 h-[100vh] mt-50 flex justify-between'>
        {/* images */}
       <div className='w-[56%] h-full relative'>
        <img src="images/dots-green.svg" alt="" className='absolute left-[-91px] top-[-80px]'/>
        <img src="images/img-grid-1.jpg" alt=""  className='absolute w-[67%] h-[80%] rounded-3xl shadow'/>
        <img src="images/img-grid-2.jpg" alt="" className='absolute right-0 w-[30%] h-[30%] rounded-2xl shadow'/>
        <img src="images/img-grid-3.jpg" alt="" className='absolute bottom-12 left-[50%] w-[50%] h-[60%] rounded-2xl shadow'/>
       </div>
      {/* content */}
       <div className='w-[40%] h-full  flex flex-col justify-start pl-3 '>
         <h2 className='text-3xl font-medium mb-4'>We Help You Make Modern Interior Design </h2>
         <p className='mb-6 text-[16px] text-black/70 pr-5 font-serif'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
         <ul className='w-full flex flex-wrap list-disc justify-between mb-8'>
          <li className='w-[45%] mb-4 text-[14px] text-black/70 px-2'>Donec vitae odio quis nisl dapibus malesuada</li>
          <li className='w-[45%] mb-4 text-[14px] text-black/70 px-2'>Donec vitae odio quis nisl dapibus malesuada</li>
          <li className='w-[45%] mb-4 text-[14px] text-black/70 px-2'>Donec vitae odio quis nisl dapibus malesuada</li>
          <li className='w-[45%] mb-4 text-[14px] text-black/70 px-2'>Donec vitae odio quis nisl dapibus malesuada</li>
         </ul>
         <button className='w-1/3 px-2 py-3 rounded-full cursor-pointer text-white bg-black '>Explore</button>

       </div>
      </div>
        {/* products more info */}
        <div className='w-full px-25 h-[30vh]  py-5 flex items-center justify-between mt-20'>
         {
           furntureInfo.map((item,index)=>(<FurnitureInfo key={index} image={item.image} title={item.title} description={item.description}/>))
          }  
        
          
        </div>
       {/* testimonials */}
<div className='w-full px-25 py-15 h-[80vh] my-10 flex flex-col items-center justify-center'>
  <h2 className='text-4xl font-semibold text-gray-900 text-center mb-16'>Testimonials</h2>
  <div className=' mx-auto relative px-16 w-full'>
    <div className='text-center'>
      <p className='text-gray-600 text-xl leading-relaxed mb-12 max-w-3xl mx-auto font-light'>
        "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. 
        Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque 
        habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis 
        volutpat dui quis scelerisque."
      </p>
      <div className='flex flex-col items-center'>
        <div className='w-20 h-20 rounded-full mb-4 overflow-hidden'>
          <div className='w-full h-full rounded-full flex items-center justify-center'>
            <img src="images/person-1.jpg" alt="person1" />
          </div>
        </div>
        <h3 className='font-semibold text-base text-gray-600 mb-1'>Maria Jones</h3>
        <p className='text-gray-500 text-sm'>CEO, Co-Founder, XYZ Inc.</p>
      </div>
    </div>
    
    {/* Navigation arrows */}
    <button className='absolute left-0 top-[40%] transform -translate-y-1/2 w-14 h-14 rounded-full group  hover:bg-[#3B5D50] flex items-center justify-center transition-all bg-[#DCE5E4] '>
      <svg className='w-5 h-5 text-gray-600 group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
      </svg>
    </button>
    <button className='absolute right-0 top-[40%] transform -translate-y-1/2 w-14 h-14 rounded-full group  hover:bg-[#3B5D50] flex items-center justify-center transition-all bg-[#DCE5E4]'>
      <svg className='w-5 h-5 text-gray-600 group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
      </svg>
    </button>
    
    {/* Dots indicator */}
    <div className='flex justify-center mt-12 space-x-3 mb-10'>
      <div className='w-2 h-2 rounded-full bg-[#3B5D50]'></div>
      <div className='w-2 h-2 rounded-full bg-gray-300'></div>
      <div className='w-2 h-2 rounded-full bg-gray-300'></div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home