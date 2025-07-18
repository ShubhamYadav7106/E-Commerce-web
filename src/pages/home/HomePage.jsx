// import React from 'react'
import Category from '../../components/category/Category'
import HeroSection from '../../components/heroSection/HeroSection'
import HomePageProductCard from '../../components/homePagePtoductCard/HomePageProductCard'
import Layout from '../../components/layout/Layout'
import Testimonial from '../../components/testimoinals/Testimonial'
import Track from '../../components/track/Track'

const HomePage = () => {
  return (
    <Layout>
        <HeroSection/>
        <Category/>
        <HomePageProductCard/>
        <Track/>
        <Testimonial/>
           </Layout>
           
  )
}

export default HomePage