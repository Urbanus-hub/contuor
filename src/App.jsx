import React from 'react'
import Header from './components/Header'
import { Route,Routes } from 'react-router-dom'
import Shop from './components/Shop'
import About from './components/About'
import Services from './components/Services'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Home from './components/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  <Footer/>
    </>
  
  )
}

export default App