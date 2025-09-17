import React,{useState} from 'react'
import { CraftCard } from './Home'
import { CraftContext } from '../App';
import {crafts} from '../utils/items'
// import Cart from './Cart'
const Shop = () => {
  const {cartItems,setCartItems}=React.useContext(CraftContext)
  
  

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
              
            <CraftCard key={index} image={craft.image} title={craft.title} price={craft.price} id={craft.id}/>
          ))
        }
       
       
      </div>
    
    </div>
  )
}

export default Shop