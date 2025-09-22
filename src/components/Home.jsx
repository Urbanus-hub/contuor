import React from "react";
import WhyUsCard from "../components/WhyUsCard";
import { Link } from "react-router-dom";
import { CraftContext } from "../App";
import { Toaster, toast } from "sonner";
export function BlogCard() {
  return (
    <div className="w-full h-auto lg:h-[90%] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 lg:mb-30">
      <div className="w-full lg:w-[32%] h-auto lg:h-[70%] flex flex-col items-start justify-between">
        <img
          src="images/post-1.jpg"
          alt=""
          className="w-full h-[250px] lg:h-[80%] rounded-2xl hover:opacity-75 object-cover"
        />
        <p className="text-black/80 text-sm w-full lg:w-[65%] font-semibold px-2 lg:px-5 py-3">
          First Time Home Owner Ideas
          <span className="text-black/40 font-normal"> by</span> Kristin Watson{" "}
          <span className="text-black/40 font-normal"> on</span> Dec 19, 2021
        </p>
      </div>

      <div className="w-full lg:w-[32%] h-auto lg:h-[70%] flex flex-col items-start justify-between">
        <img
          src="images/post-2.jpg"
          alt=""
          className="w-full h-[250px] lg:h-[80%] rounded-2xl hover:opacity-75 object-cover"
        />
        <p className="text-black/80 text-sm w-full lg:w-[65%] font-semibold px-2 lg:px-5 py-3">
          How To Keep Your Furniture Clean
          <span className="text-black/40 font-normal"> by</span> Robert Fox{" "}
          <span className="text-black/40 font-normal"> on</span> Dec 15, 2021
        </p>
      </div>

      <div className="w-full lg:w-[32%] h-auto lg:h-[70%] flex flex-col items-start justify-between">
        <img
          src="images/post-3.jpg"
          alt=""
          className="w-full h-[250px] lg:h-[80%] rounded-2xl hover:opacity-75 object-cover"
        />
        <p className="text-black/80 text-sm w-full lg:w-[65%] font-semibold px-2 lg:px-5 py-3">
          Small Space Furniture Apartment Ideas
          <span className="text-black/40 font-normal"> by</span> Kristin Watson{" "}
          <span className="text-black/40 font-normal"> on</span> Dec 12, 2021
        </p>
      </div>
    </div>
  );
}

export function CraftCard({ image, title, price, id }) {
  const { cartItems, setCartItems } = React.useContext(CraftContext);
  function addToCart(item) {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
    toast.success("Item added to cart!", {
      style: { backgroundColor: "#22c55e", color: "white" },
    });
  }
  return (
    <div className="relative w-full sm:w-[48%] lg:w-[25%] h-[350px] md:h-[400px] flex flex-col justify-between rounded-lg transition-all ease-in-out duration-300 hover:bg-[#DCE5E4] group mb-8 lg:mb-0 p-4">
      <div className="flex-1 flex items-center justify-center pt-4">
        <img
          src={image}
          alt=""
          className="w-full h-[200px] md:h-[250px] object-contain"
        />
      </div>

      <div className="flex flex-col items-center justify-center py-4">
        <h3 className="text-sm md:text-md font-medium mb-2">{title}</h3>
        <p className="text-base md:text-lg font-black text-black/75">
          ${price}
        </p>
      </div>

      <button
        onClick={() =>
          addToCart({ image: image, title: title, price: price, id: id })
        }
        className="bg-black absolute bottom-[-20px] w-[40px] h-[40px] left-1/2 transform -translate-x-1/2 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </div>
  );
}

function FurnitureInfo({ image, title, description }) {
  return (
    <div className="w-full md:w-[48%] lg:w-[30%] h-auto md:h-[95%] flex flex-col md:flex-row items-center justify-between mb-8 md:mb-20">
      <div className="w-full md:w-[30%] bg-[#DCE5E4] h-[200px] md:h-[60%] relative rounded-2xl mb-4 md:mb-0 flex justify-center items-center">
        <img
          src={image}
          alt=""
          className="  sm:absolute top-[-10px] w-full md:w-[300px] h-[120px] object-contain"
        />
      </div>
      <div className="w-full md:w-[65%] flex flex-col items-start gap-3 h-auto md:h-[70%] justify-center">
        <h3 className="text-[14px] md:text-base font-semibold text-black/90">
          {title}
        </h3>
        <p className="text-[14px] md:text-base text-black/70">{description}</p>
        <a
          href=""
          className="text-black/75 text-[14px] md:text-base hover:text-black/50"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import Testimonials from "./Testimonials";

const Home = () => {
  const crafts = [
    {
      image: "images/product-1.png",
      title: "Nordic Chair",
      price: 50.0,
    },
    {
      image: "images/product-2.png",
      title: "Cruzo Aero Chair",
      price: 78.5,
    },
    {
      image: "images/product-3.png",
      title: "Ergonomic Chair",
      price: 43.0,
    },
  ];

  const furnitureInfo = [
    {
      image: "images/product-1.png",
      title: "Nordic Chair",
      description:
        "Experience the elegance of Scandinavian design with our Nordic Chair, crafted for both comfort and timeless style.",
    },
    {
      image: "images/product-2.png",
      title: "Cruzo Aero Chair",
      description:
        "The Cruzo Aero Chair blends modern aesthetics with ergonomic support, perfect for elevating any living space.",
    },
    {
      image: "images/product-3.png",
      title: "Ergonomic Chair",
      description:
        "Designed for those who value both form and function, our Ergonomic Chair offers superior comfort for everyday living.",
    },
  ];

  return (
    <div className="w-full bg-[#EFF2F1]">
      {/* hero */}
      <div className="w-full lg:h-[75vh] h-auto bg-[#3B5D50] px-5 sm:px-10 md:px-16 lg:px-25 flex lg:flex-row flex-col items-center lg:justify-between justify-center py-10 lg:py-0">
        {/* content */}
        <div className="lg:w-[35%] w-full flex flex-col gap-5 text-center lg:text-left">
          <h1 className="text-white lg:text-5xl text-2xl sm:text-3xl md:text-4xl font-black mb-[30px] lg:mb-0 mt-10 lg:mt-0">
            Modern Interior Design Studio
          </h1>
          <p className="text-[#9DAEA2] mb-[24px] text-sm md:text-base">
            Transform your space with curated pieces that blend comfort, beauty,
            and modern design for inspired living.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <Link
              to="/shop"
              className="px-8 py-3 rounded-full bg-[#F8B810] border-0 font-medium text-[17px] cursor-pointer text-center"
            >
              shop now
            </Link>

            <button className="px-8 py-3 border-2 rounded-full border-white/50 cursor-pointer text-white">
              Explore
            </button>
          </div>
        </div>

        {/* hero img */}
        <div className="lg:w-[55%] w-full h-[300px] md:h-[400px] lg:h-full flex-col items-end justify-end relative mt-10 lg:mt-0">
          <img
            src="images/dots-light.svg"
            alt=""
            className="absolute right-[-50px] lg:right-[-100px] top-10 lg:top-22 hidden md:block"
          />
          <img
            src="images/couch.png"
            alt=""
            className="absolute lg:top-16 top-0 right-[-10px] lg:right-[-10px] z-3 w-full h-full object-contain"
          />
        </div>
      </div>

      {/* craft */}
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-25 h-auto py-20 flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-[25%] flex flex-col h-auto items-center lg:items-start justify-start text-center lg:text-left mb-10 lg:mb-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 font-mono">
            Crafted with excellent material.
          </h2>
          <p className="mb-6 text-[14px] md:text-base text-black/70">
            Discover furniture crafted with passion and precision, made to
            elevate your home and reflect your unique style.
          </p>
          <button className="px-6 py-3 border-2 rounded-full cursor-pointer text-white bg-black hover:bg-gray-800 transition-colors">
            Explore
          </button>
        </div>

        {/* craft cards */}
        <div className="w-full lg:w-[70%] h-auto flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-start justify-center lg:justify-around gap-4 lg:gap-2">
          {crafts.map((craft, index) => (
            <CraftCard
              key={index}
              image={craft.image}
              title={craft.title}
              price={craft.price}
            />
          ))}
        </div>
      </div>

      {/* why us */}
      <WhyUsCard />

      {/* services */}
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-25 h-auto lg:h-[100vh] lg:mt-50 flex flex-col lg:flex-row justify-between py-10 lg:py-0">
        {/* images */}
        <div className="w-full lg:w-[56%] h-[400px] lg:h-full relative mb-10 lg:mb-0">
          <img
            src="images/dots-green.svg"
            alt=""
            className="absolute left-[-50px] lg:left-[-91px] top-[-40px] lg:top-[-80px] hidden lg:block"
          />
          <img
            src="images/img-grid-1.jpg"
            alt=""
            className="absolute w-[70%] lg:w-[67%] h-[60%] lg:h-[80%] rounded-3xl shadow"
          />
          <img
            src="images/img-grid-2.jpg"
            alt=""
            className="absolute right-0 w-[25%] lg:w-[30%] h-[25%] lg:h-[30%] rounded-2xl shadow"
          />
          <img
            src="images/img-grid-3.jpg"
            alt=""
            className="absolute bottom-0 lg:bottom-12 left-[45%] lg:left-[50%] w-[45%] lg:w-[50%] h-[50%] lg:h-[60%] rounded-2xl shadow"
          />
        </div>

        {/* content */}
        <div className="w-full lg:w-[40%] h-auto lg:h-full flex flex-col justify-start lg:pl-3 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            We Help You Make Modern Interior Design
          </h2>
          <p className="mb-6 text-[14px] md:text-[16px] text-black/70 font-serif">
            From concept to creation, we help you design interiors that are both
            functional and breathtaking—spaces where memories are made and
            comfort is redefined.
          </p>

          <ul className="w-full flex flex-col md:flex-row md:flex-wrap list-disc justify-between mb-8 pl-5">
            <li className="w-full md:w-[45%] mb-4 text-[14px] md:text-base text-black/70">
              Handpicked materials for lasting beauty
            </li>
            <li className="w-full md:w-[45%] mb-4 text-[14px] md:text-base text-black/70">
              Expert craftsmanship in every detail
            </li>
            <li className="w-full md:w-[45%] mb-4 text-[14px] md:text-base text-black/70">
              Personalized solutions for your lifestyle
            </li>
            <li className="w-full md:w-[45%] mb-4 text-[14px] md:text-base text-black/70">
              Sustainable choices for a better tomorrow
            </li>
          </ul>

          <div className="flex justify-center lg:justify-start">
            <button className="px-6 py-3 rounded-full cursor-pointer text-white bg-black">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* products more info */}
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-25 h-auto lg:h-[30vh] py-10 lg:py-5 flex flex-col lg:flex-row items-center justify-between lg:mt-20">
        {furnitureInfo.map((item, index) => (
          <FurnitureInfo
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      {/* testimonials */}
      <Testimonials />
      {/* blogs */}
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-25 h-auto lg:h-[90vh] flex flex-col py-10 lg:py-0">
        <div className="flex w-full h-auto lg:h-[20%] flex-col md:flex-row justify-between items-center mb-8 lg:mb-0">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 md:mb-0">
            Recent Blog
          </h2>
          <a
            href=""
            className="text-black text-[14px] md:text-base underline hover:no-underline"
          >
            View All Posts
          </a>
        </div>

        {/* blog cards */}
        <BlogCard />
      </div>
    </div>
  );
};

export default Home;
