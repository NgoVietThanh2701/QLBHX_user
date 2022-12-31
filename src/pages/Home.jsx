import React from 'react'
import Category from '../components/category/Category'
import FlashSale from '../components/flashSale/FlashSale'
import MainHome from '../components/mainHome/MainHome'
import Suggest from '../components/suggest/Suggest'

const Home = () => {

   return (
      <>
         <MainHome />
         <Category />
         <FlashSale />
         <Suggest />
      </>
   )
}

export default Home