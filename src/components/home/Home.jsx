import React from 'react'
import Hero from '../hero/Hero'
import HeaderHero from '../headerHero/HeaderHero'
import Features from '../features/Features'
import PopularDestinations from '../popularDestinations/PopularDestinations'
import TopPackages from '../topPackages/TopPackages'
import Testimonials from '../testimonials/Testimonials'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <div>
    <HeaderHero/>
    <Features/>
    <PopularDestinations/>
    <TopPackages/>
    <Testimonials/>
    <Footer/>
    </div>
  )
}

export default Home