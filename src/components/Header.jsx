import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { account } from "../utils/appwrite";

function Header() {
  const [active, setActive] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();

  // Use useCallback to prevent recreation of the function on each render
  const toggleMenu = useCallback(() => {
    setActive((prev) => !prev);
  }, []);

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

  // Reset menu state when location changes
  useEffect(() => {
    setActive(false);
  }, [location.pathname]);

  // Helper to set active link styling
  const navLinkClass = useCallback(
    (path) =>
      `lg:text-[1rem] md:text-sm sm:font-light text-white/75 focus:text-white duration-100 ease hover:text-white
    ${
      location.pathname === path
        ? "text-white underline decoration-[#F8B810] decoration-4 underline-offset-8"
        : ""
    }`,
    [location.pathname]
  );

  return (
    <div className="w-full h-[80px] bg-[#3B5D50] flex items-center lg:px-25 justify-between md:px-18 sm:px-25 relative md:static px-5 z-50">
      {/* logo */}
      <div className="lg:w-[20%] md:w-[10%] sm:w-[40%] w-[35%] h-full flex items-center z-50">
        <h1 className="text-white lg:text-3xl md:text-2xl font-medium sm:text-2xl text-2xl">
          Contuor.
        </h1>
      </div>

      {/* nav links */}
      <div
        className={`lg:w-[70%] md:w-[80%] w-full md:h-full md:flex md:flex-row md:items-center lg:justify-end absolute md:static md:bg-transparent bg-[#3B5D50] z-40 top-full left-0 h-[60vh] ${
          active ? "flex flex-col sm:px-20" : "hidden sm:px-3"
        } sm:justify-end rounded-b-md transition-all duration-300 `}
      >
        <ul className="flex flex-col gap-4 py-8 px-5 md:w-[90%] lg:w-[80%] lg:justify-around md:flex-row md:py-0 md:px-0 lg:gap-4 w-full items-start md:items-center justify-center md:justify-between">
          <li>
            <Link
              to="/"
              className={navLinkClass("/")}
              onClick={() => setActive(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className={navLinkClass("/shop")}
              onClick={() => setActive(false)}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={navLinkClass("/about")}
              onClick={() => setActive(false)}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={navLinkClass("/services")}
              onClick={() => setActive(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={navLinkClass("/blog")}
              onClick={() => setActive(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={navLinkClass("/contact")}
              onClick={() => setActive(false)}
            >
              Contact us
            </Link>
          </li>
        </ul>

        {/* Mobile Account Section */}
        <div className="w-full md:hidden px-5 pt-2 pb-4">
          {loggedIn ? (
            <div className="flex items-center lg:justify-between gap-3">
              <Link
                to="/profile"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#F8B810]/20 border border-[#F8B810]/30 hover:bg-[#F8B810]/30 transition-all duration-200 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-full bg-[#F8B810] flex items-center justify-center shadow-md">
                  <img src="images/user.svg" alt="user" className="w-5 h-5" />
                </div>
                <span className="text-white font-medium text-sm">Profile</span>
              </Link>
              <Link
                to="/cart"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 transition-all duration-200 backdrop-blur-sm border border-white/20"
              >
                <img src="images/cart.svg" alt="cart" className="w-6 h-6" />
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <Link
                to="/login"
                onClick={() => setActive(false)}
                className="w-full py-3 px-6 rounded-xl bg-transparent border-2 border-[#F8B810] text-[#F8B810] font-semibold hover:bg-[#F8B810] hover:text-black transition-all duration-200 text-center"
              >
                Log In
              </Link>
              <div className="flex items-center justify-between">
                <Link
                  to="/register"
                  onClick={() => setActive(false)}
                  className="flex-1 py-3 px-6 rounded-xl bg-[#F8B810] text-black font-semibold hover:bg-[#E6A50A] transition-all duration-200 text-center mr-3"
                >
                  Sign Up
                </Link>
                <Link
                  to="/cart"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 transition-all duration-200 backdrop-blur-sm border border-white/20"
                >
                  <img src="images/cart.svg" alt="cart" className="w-6 h-6" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Account Section */}
      <div className="lg:w-[15%] md:w-[20%] h-full md:flex items-center justify-end gap-4 hidden z-50">
        {loggedIn ? (
          <Link
            to="/profile"
            onClick={() => setActive(false)}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F8B810] hover:bg-[#E6A50A] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <img src="images/user.svg" alt="user" className="w-6 h-6" />
          </Link>
        ) : (
          <Link
            to="/login"
            onClick={() => setActive(false)}
            className="px-6 py-2.5 rounded-full bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-[#3B5D50] transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Log In
          </Link>
        )}

        <Link
          to="/cart"
          onClick={() => setActive(false)}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20 hover:scale-105 relative"
        >
          <img src="images/cart.svg" alt="cart" className="w-6 h-6" />
        </Link>
      </div>

      {/* hamburger */}
      <button
        className="w-10 h-10 md:hidden flex items-center justify-center cursor-pointer hover:bg-white/10 rounded-full transition-colors duration-200 z-50 relative"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <img src="images/main-menu.png" alt="" className="w-6 h-6" />
      </button>
    </div>
  );
}

export default Header;
