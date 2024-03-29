import React, { useEffect, useState, useCallback } from 'react'
import Header from '../common/header/Header'
import Category from '../components/category/Category'
import FlashSale from '../components/flashSale/FlashSale'
import MainHome from '../components/mainHome/MainHome'
import Suggest from '../components/suggest/Suggest'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getMeUser } from '../features/authSlice'
import { getCart } from '../features/cartSlice'

const Home = () => {

   const [category, setCategory] = useState([]);
   const [products, setProducts] = useState([]);

   const dispatch = useDispatch();

   const checkUserLoggedIn = useCallback (() => (dispatch) => {
      dispatch(getMeUser());
   }, [])

   useEffect(() => {
      dispatch(checkUserLoggedIn());
   }, [checkUserLoggedIn, dispatch]);

   const getCategory = async () => {
      const response = await axios.get(`http://localhost:5000/category`);
      setCategory(response.data);
   }

   const getProducts = useCallback(async (branch) => {
      const response = await axios.get(`http://localhost:5000/product/${branch}`);
      setProducts(response.data);
   }, []);

   useEffect(() => {
      getCategory();
   }, []);

   // cart
   const { carts } = useSelector((state) => state.cart);
   const getCarts = useCallback(async (branch) => {
      dispatch(getCart(branch));
   }, [dispatch]);


   return (
      <>
         <Header header={true} getProducts={getProducts} carts={carts} getCarts={getCarts}/>
         <MainHome />
         <Category category={category} />
         <FlashSale products={products} />
         <Suggest products={products} />
      </>
   )
}

export default Home