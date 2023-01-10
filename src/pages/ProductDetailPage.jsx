import React from 'react'
import Header from '../common/header/Header'
import ProductDetail from '../components/product-detail/ProductDetail'

const ProductDetailPage = () => {

   return (
      <div>
         <Header header={false} />
         <ProductDetail />
      </div>
   )
}

export default ProductDetailPage