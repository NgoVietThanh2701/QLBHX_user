import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../common/header/Header'
import ProductDetail from '../components/product-detail/ProductDetail'

const ProductDetailPage = () => {

   const { id, id_product } = useParams();
   const [product, setProduct] = useState([]);
   const [products, setProducts] = useState([]);

   const getProduct = useCallback(async () => {
      const response = await axios.get(`http://localhost:5000/category/${id}/all-products/${id_product}`)
      setProduct(response.data);
   }, [id, id_product])

   const getProductByCate = useCallback(async () => {
      const response = await axios.get(`http://localhost:5000/category/${id}/all-products`);
      setProducts(response.data)
   }, [id])

   useEffect(() => {
      getProduct();
      getProductByCate();
   }, [getProduct, getProductByCate])


   return (
      <>
         <Header header={false} />
         <ProductDetail product={product} products={products} />
      </>
   )
}

export default ProductDetailPage