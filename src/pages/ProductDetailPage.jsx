import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../common/header/Header'
import ProductDetail from '../components/product-detail/ProductDetail'

const ProductDetailPage = () => {

   const { id, id_product } = useParams();
   const [product, setProduct] = useState();
   const [products, setProducts] = useState([]);

   const getProduct = useCallback(async () => {
      const response = await axios.get(`http://localhost:5000/productbyID/${id_product}`);
      console.log("zzz")
      console.log(response.data);
      setProduct(response.data);
   }, [id_product]);

   // const getProductByCate = useCallback(async () => {
   //    const response = await axios.get(`http://localhost:5000/category/${id}/all-products`);
   //    setProducts(response.data)
   // }, [id])

   const getProductByCate = useCallback(async (branch) => {
      if(!branch) {
         branch = 3434;
      }
      const response = await axios.get(`http://localhost:5000/category/${id}/${branch}`);
      setProducts(response.data)
   }, [id])

   useEffect(() => {
      getProduct();
      getProductByCate();
   }, [getProduct, getProductByCate])

   return (
      <>
         <Header header={false} getProducts = {getProductByCate}/>
         <ProductDetail product={product} products={products} />
      </>
   )
}

export default ProductDetailPage