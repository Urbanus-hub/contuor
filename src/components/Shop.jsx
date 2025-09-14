import React from 'react'
import { CraftCard } from './Home'
// import Cart from './Cart'
const Shop = () => {
  const crafts = [
    {
      image: "images/product-1.png",
      title: "Nordic Chair",
      price: 50.00,
    },
    {
      image: "images/product-2.png",
      title: "Cruzo Aero Chair",
      price: 78.50,
    },
    {
      image: "images/product-3.png",
      title: "Ergonomic Chair",
      price: 43.00,
    },
    {
      image: "images/product-1.png",
      title: "Nordic Chair",
      price: 50.00,
    },
    {
      image: "images/product-2.png",
      title: "Cruzo Aero Chair",
      price: 78.50,
    },
    {
      image: "images/product-3.png",
      title: "Ergonomic Chair",
      price: 43.00,
    },
    {
      image: "images/product-2.png",
      title: "Cruzo Aero Chair",
      price: 78.50,
    },
    {
      image: "images/product-3.png",
      title: "Ergonomic Chair",
      price: 43.00,
    }
  ];
  return (
    <div className='min-h-[100vh] w-full bg-[#EFF2F1] '>
      <div className='h-[20vh] lg:h-[40vh] w-full bg-[#3B5D50] flex flex-col justify-center items-start'>
         <h2 className='text-3xl lg:text-5xl  mb-6 text-white px-5 font-bold lg:px-25 md:px-18 sm:px-25'>
          Shop
         </h2>
      </div>
      {/* products */}
      <div className=' h-full px-5 flex flex-wrap mt-10 lg:pb-25 md:px-18  lg:px-25 sm:px-25'>
        {
          crafts.map((craft,index)=>(
              
            <CraftCard key={index} image={craft.image} title={craft.title} price={craft.price}/>
          ))
        }
       
       
      </div>
    
    </div>
  )
}

export default Shop