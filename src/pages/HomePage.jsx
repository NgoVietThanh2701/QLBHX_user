import React from 'react'
import Header from '../common/header/Header'
import Category from '../components/category/Category'
import FlashSale from '../components/flashSale/FlashSale'
import MainHome from '../components/mainHome/MainHome'
import Suggest from '../components/suggest/Suggest'

const Home = () => {

   return (
      <>
         <Header header={true} />
         <MainHome />
         <Category />
         <FlashSale />
         <Suggest />
      </>
   )
}

export default Home