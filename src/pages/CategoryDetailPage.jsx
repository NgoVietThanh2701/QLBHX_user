import React, { useCallback, useEffect, useState } from 'react'
import Header from '../common/header/Header'
import CategoryDetail from '../components/category-detail/CategoryDetail'
import MainHome from '../components/mainHome/MainHome'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CategoryDetailPage = () => {

   const { id } = useParams();
   const [type, setType] = useState([]);
   const [products, setProducts] = useState([]);

   const getType = useCallback(async () => {
      const response = await axios.get(`http://localhost:5000/category/${id}`);
      setType(response.data);
   }, [id])

   const getProductByCate = useCallback(async () => {
      const response = await axios.get(`http://localhost:5000/category/${id}/all-products`);
      setProducts(response.data)
   }, [id])

   useEffect(() => {
      getType();
      getProductByCate();
   }, [getType, getProductByCate])


   return (
      <>
         <Header header={true} />
         <MainHome />
         <CategoryDetail type={type} products={products} />
      </>
   )
}

export default CategoryDetailPage