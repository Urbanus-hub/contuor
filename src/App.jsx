import React, { createContext, useState, useEffect } from "react";
import Header from "./components/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import Shop from "./components/Shop";
import About from "./components/About";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/LogIn";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { Toaster, toast } from "sonner";
import Orders from "./components/Orders";
import ProtectedRoute from "./components/ProtectedRoute";
// import { ToastContainer } from 'react-toastify';
export const CraftContext = createContext();
const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const whyUs = [
    {
      image: "images/truck.svg",
      title: "Fast & Free Shipping",
      description:
        "Enjoy complimentary, swift delivery on every order—bringing your dream home to life, faster than ever.",
    },
    {
      image: "images/bag.svg",
      title: "Easy to Shop",
      description:
        "A seamless shopping experience from browsing to checkout, designed to inspire and delight.",
    },
    {
      image: "images/support.svg",
      title: "24/7 Support",
      description:
        "Our dedicated team is here for you around the clock, ensuring your satisfaction at every step.",
    },
    {
      image: "images/return.svg",
      title: "Hassle Free Returns",
      description:
        "Shop with confidence—returns are simple and stress-free, because your happiness matters.",
    },
  ];

  return (
    <>
      <Toaster
        position="bottom-right"
        richColors
        closeButton
        expand={true}
        duration={1000}
        toastOptions={{
          style: {
            background: "linear-gradient(135deg, #3B5D50 0%, #4A6B5E 100%)",

            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            padding: "16px 20px",
            borderRadius: "16px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(10px)",
            minHeight: "70px",
          },
          className: "animate-in slide-in-from-right-full duration-300",
          closeButton: {
            style: {
              background: "#F8B810",
              color: "#3B5D50",
              border: "none",
              borderRadius: "50%",
              width: "24px",
              height: "24px",
              fontSize: "14px",
              fontWeight: "bold",
              boxShadow: "0 4px 8px rgba(248, 184, 16, 0.3)",
              transition: "all 0.2s ease",
            },
          },
          success: {
            style: {
              background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
              border: "2px solid #34D399",
              color: "white",
            },
            iconTheme: {
              primary: "#34D399",
              secondary: "white",
            },
          },
          error: {
            style: {
              background: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
              border: "2px solid #F87171",
              color: "white",
            },
            iconTheme: {
              primary: "#F87171",
              secondary: "white",
            },
          },
          loading: {
            style: {
              background: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
              border: "2px solid #818CF8",
              color: "white",
            },
            iconTheme: {
              primary: "#818CF8",
              secondary: "white",
            },
          },
        }}
      />
      {/* <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/> */}
      <Header />
      <CraftContext.Provider value={{ whyUs, cartItems, setCartItems }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CraftContext.Provider>
      <Footer />
    </>
  );
};

export default App;
