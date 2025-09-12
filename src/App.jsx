import React ,{createContext} from 'react'
import Header from './components/Header'
import { Route,Routes } from 'react-router-dom'
import Shop from './components/Shop'
import About from './components/About'
import Services from './components/Services'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Home from './components/Home'
import Footer from './components/Footer'
export const CraftContext=createContext();
const App = () => {
  const whyUs=[
    {
      image:"images/truck.svg",
      title:"Fast & Free Shipping",
      description:"Enjoy complimentary, swift delivery on every order—bringing your dream home to life, faster than ever."
    },{
      image:"images/bag.svg",
      title:"Easy to Shop",
      description:"A seamless shopping experience from browsing to checkout, designed to inspire and delight."
    },{
      image:"images/support.svg",
      title:"24/7 Support",
      description:"Our dedicated team is here for you around the clock, ensuring your satisfaction at every step."
    },{
      image:"images/return.svg",
      title:"Hassle Free Returns",
      description:"Shop with confidence—returns are simple and stress-free, because your happiness matters."
    }
  ]
   
  return (
    <>
    <Header/>
    <CraftContext.Provider value={whyUs}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </CraftContext.Provider>
  <Footer/>
    </>
  
  )
}

export default App