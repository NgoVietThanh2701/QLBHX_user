import React from 'react'
import Header from '../common/header/Header'
import CategoryDetail from '../components/category-detail/CategoryDetail'
import MainHome from '../components/mainHome/MainHome'

const Category = () => {
   return (
      <>
         <Header header={true} />
         <MainHome />
         <CategoryDetail />
      </>
   )
}

export default Category