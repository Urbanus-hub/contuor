import React,{useState} from 'react'
import {Link} from 'react-router-dom'


function Header (){
 const[active,setActive]=useState(false);
 function toggleMenu(){
    console.log("clicked")
    setActive(!active);
 }
return <div className='w-full h-[80px] bg-[#3B5D50] flex items-center lg:px-25 justify-between md:px-18 sm:px-25 relative md:static px-5'>
        {/* #3B5D50 */}
        {/* logo */}
        <div className='lg:w-[20%] md:w-[10%] sm:w-[40%] w-[35%]  h-full flex items-center'>
          <h1 className='text-white lg:text-3xl md:text-2xl font-medium sm:text-2xl text-2xl'>Contuor.</h1>
        </div>
        {/* nav links */}
  <div className={`lg:w-[60%]  md:w-[70%]  w-full md:h-full md:flex md:flex-row md:items-center md:justify-center lg:justify-end  absolute md:static md:bg-transparent bg-[#3B5D50] z-50 top-full left-0 h-[52vh] ${active ? "flex flex-col" : "hidden"} sm:justify-between rounded-b-md  transition-all duration-300`}>
   <ul className='flex flex-col gap-6 py-8  px-5 md:gap-4  md:w-[85%] lg:w-[80%] md:justify-between  lg:justify-around md:flex-row md:py-0 md:px-0 lg:gap-4 w-full items-start md:items-center justify-center'>
            <li><Link to="/" className='lg:text-[1rem] md:text-sm sm:font-light  sm:font-light text-white/75  focus:text-white duration-100 ease hover:text-white hover:underline'>Home</Link></li>
            <li><Link to="/shop" className='lg:text-[1rem] sm:font-light  md:text-sm text-gray-200 focus:text-white hover:text-white active:text-white'>Shop</Link></li>
            <li><Link to="/about" className='lg:text-[1rem] sm:font-light md:text-sm text-white/75 focus:text-white hover:text-white active:text-white'>About us</Link></li>
            <li><Link to="/services" className='lg:text-[1rem] sm:font-light md:text-sm text-white/75 focus:text-white hover:text-white active:text-white'>Services</Link></li>
            <li><Link to="/blog" className='lg:text-[1rem] sm:font-light md:text-sm text-white/75 focus:text-white hover:text-white active:text-white'>Blog</Link></li>
            <li><Link to="/contact" className='lg:text-[1rem] sm:font-light md:text-sm text-white/75 focus:text-white hover:text-white active:text-white'>Contact us</Link></li>
         </ul>
         <div className='w-full h-[20%] md:hidden flex items-start gap-5 justify-start mt-2 px-5'>
         <img src="images/user.svg" alt="user" className='lg:w-[24px] lg:h-[24px] md:w-[22px] md:h-[22px]' />
         <img src="images/cart.svg" alt="cart" className='lg:w-6 lg:h-6 md:w-[22px] md:h-[22px]' />
        </div>
        </div>
        
        {/* account */}
        <div className='lg:w-[7%] md:w-[10%] h-full md:flex items-center justify-between hidden'>
         <img src="images/user.svg" alt="user" className='lg:w-[24px] lg:h-[24px] md:w-[22px] md:h-[22px]' />
         <img src="images/cart.svg" alt="cart" className='lg:w-6 lg:h-6 md:w-[22px] md:h-[22px]' />
        </div>
        {/* humburger */}
        <div className=' w-10 h-10  md:hidden flex items-center justify-center' onClick={toggleMenu}>
            <img src="images/main-menu.png" alt=""  className='w-6 h-6'/>
        </div>
    </div>
}

export default Header