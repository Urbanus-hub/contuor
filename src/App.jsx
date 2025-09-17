import React, { createContext } from "react";
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
      <Toaster position="bottom-right" richColors closeButton />
      {/* <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/> */}
      <Header />
      <CraftContext.Provider value={whyUs}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          
            <Route path="/profile" element={
              <ProtectedRoute>
              <Profile />
              </ProtectedRoute>
              } />

            <Route path="/orders" element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            } />
            <Route path="/checkout" element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            } />

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CraftContext.Provider>
      <Footer />
    </>
  );
};

export default App;
