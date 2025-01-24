import React from 'react'
import Hero from '../Components/Hero'
import Promo from '../Components/Promo'
import Dish from '../Components/Dish'
import About from '../Components/About'
import Review from '../Components/Review'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Promo/>
      <Dish/>
      <About/>
      <Review/>
    </div>
  )
}

export default Home
