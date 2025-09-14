import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { account } from '../utils/appwrite';

function Header() {
  const [active, setActive] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();

  function toggleMenu() {
    setActive(!active);
  }

  // Check login status on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        await account.get();
        setLoggedIn(true);
      } catch {
        setLoggedIn(false);
      }
    };
    checkSession();
  }, []);

  // Helper to set active link styling
  const navLinkClass = (path) =>
    `lg:text-[1rem] md:text-sm sm:font-light text-white/75 focus:text-white duration-100 ease hover:text-white 
    ${location.pathname === path ? "text-white underline decoration-[#F8B810] decoration-4 underline-offset-8" : ""}`;

  return (
    <div className='w-full h-[80px] bg-[#3B5D50] flex items-center lg:px-25 justify-between md:px-18 sm:px-25 relative md:static px-5'>
      {/* logo */}
      <div className='lg:w-[20%] md:w-[10%] sm:w-[40%] w-[35%] h-full flex items-center'>
        <h1 className='text-white lg:text-3xl md:text-2xl font-medium sm:text-2xl text-2xl'>Contuor.</h1>
      </div>
      
      {/* nav links */}
      <div className={`lg:w-[60%] md:w-[70%] w-full md:h-full md:flex md:flex-row md:items-center md:justify-center lg:justify-end absolute md:static md:bg-transparent bg-[#3B5D50] z-50 top-full left-0 h-[52vh] ${active ? "flex flex-col" : "hidden"} sm:justify-between rounded-b-md transition-all duration-300`}>
        <ul className='flex flex-col gap-6 py-8 px-5 md:gap-4 md:w-[85%] lg:w-[80%] md:justify-between lg:justify-around md:flex-row md:py-0 md:px-0 lg:gap-4 w-full items-start md:items-center justify-center'>
          <li>
            <Link to="/" className={navLinkClass("/")}>Home</Link>
          </li>
          <li>
            <Link to="/shop" className={navLinkClass("/shop")}>Shop</Link>
          </li>
          <li>
            <Link to="/about" className={navLinkClass("/about")}>About us</Link>
          </li>
          <li>
            <Link to="/services" className={navLinkClass("/services")}>Services</Link>
          </li>
          <li>
            <Link to="/blog" className={navLinkClass("/blog")}>Blog</Link>
          </li>
          <li>
            <Link to="/contact" className={navLinkClass("/contact")}>Contact us</Link>
          </li>
        </ul>
        
        {/* Mobile Account Section */}
        <div className='w-full md:hidden flex items-center justify-between px-5 py-4'>
          <div className='flex items-center gap-4'>
            {loggedIn ? (
              <Link 
                to="/profile" 
                className='flex items-center justify-center w-12 h-12 rounded-full bg-[#F8B810] hover:bg-[#E6A50A] transition-all duration-200 shadow-lg hover:shadow-xl'
              >
                <img src="images/user.svg" alt="user" className='w-6 h-6' />
              </Link>
            ) : (
              <Link
                to="/login"
                className="px-6 py-2.5 rounded-full bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-[#3B5D50] transition-all duration-200"
              >
                Log In
              </Link>
            )}
          </div>
          <Link 
            to="/cart" 
            className='flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20'
          >
            <img src="images/cart.svg" alt="cart" className='w-6 h-6' />
          </Link>
        </div>
      </div>
      
      {/* Desktop Account Section */}
      <div className='lg:w-[15%] md:w-[20%] h-full md:flex items-center justify-end gap-4 hidden'>
        {loggedIn ? (
          <Link 
            to="/profile" 
            className='flex items-center justify-center w-12 h-12 rounded-full bg-[#F8B810] hover:bg-[#E6A50A] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105'
          >
            <img src="images/user.svg" alt="user" className='w-6 h-6' />
          </Link>
        ) : (
          <Link
            to="/login"
            className="px-6 py-2.5 rounded-full bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-[#3B5D50] transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Log In
          </Link>
        )}
        
        <Link 
          to="/cart" 
          className='flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20 hover:scale-105 relative'
        >
          <img src="images/cart.svg" alt="cart" className='w-6 h-6' />
        </Link>
      </div>
      
      {/* hamburger */}
      <div className='w-10 h-10 md:hidden flex items-center justify-center cursor-pointer hover:bg-white/10 rounded-full transition-colors duration-200' onClick={toggleMenu}>
        <img src="images/main-menu.png" alt="" className='w-6 h-6' />
      </div>
    </div>
  )
} 

export default Header