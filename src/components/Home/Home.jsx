import React from 'react'
import BannerMain from '../banner/BannerMain'
import ServicesMain from '../services/ServicesMain'
import DiscountSection from '../Discount Section/DiscountSection'
import NewArrivals from '../New Arrivals/NewArrivals'
import BestSale from '../Best Sales Section/BestSale'

const Home = () => {
  return (
    <>  
        <BannerMain />
        <ServicesMain />
        <DiscountSection />
        <NewArrivals />
        <BestSale />
    </>
 )

}

export default Home 