import React, { useEffect, useState } from 'react'
import Header from '../common/header/Header'
import Category from '../components/category/Category'
import FlashSale from '../components/flashSale/FlashSale'
import MainHome from '../components/mainHome/MainHome'
import Suggest from '../components/suggest/Suggest'
import axios from 'axios'

const Home = () => {

   const [category, setCategory] = useState([]);
   const [products, setProducts] = useState([]);

   const getCategory = async () => {
      const response = await axios.get(`http://localhost:5000/category`);
      setCategory(response.data);
   }

   const getProducts = async () => {
      const response = await axios.get(`http://localhost:5000/products`);
      setProducts(response.data);
   }

   useEffect(() => {
      getCategory();
      getProducts();
   }, []);

   return (
      <>
         <Header header={true} />
         <MainHome />
         <Category category={category} />
         <FlashSale products={products} />
         <Suggest products={products} />
      </>
   )
}

export default Home