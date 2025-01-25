import React from 'react'
import Hero from '../Components/Hero'
import Promo from '../Components/Promo'
import Dish from '../Components/Dish'
import About from '../Components/About'
import Review from '../Components/Review'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Promo/>
      <Dish/>
      <About/>
      <Review/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default Home
