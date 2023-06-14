import React, { useCallback, useEffect, useState } from 'react'
import Header from '../common/header/Header'
import CategoryDetail from '../components/category-detail/CategoryDetail'
import MainHome from '../components/mainHome/MainHome'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getMeUser } from '../features/authSlice'
import { getCart } from '../features/cartSlice'

const CategoryDetailPage = () => {

   const dispatch = useDispatch();
   const checkUserLoggedIn = useCallback (() => (dispatch) => {
      dispatch(getMeUser());
   }, [])

   useEffect(() => {
      dispatch(checkUserLoggedIn());
   }, [checkUserLoggedIn, dispatch]);

   const { id } = useParams();
   const [type, setType] = useState([]);
   const [products, setProducts] = useState([]);

   const getType = useCallback(async () => {
      const response = await axios.get(`http://localhost:5000/type`);
      setType(response.data);
   }, [])

   const getProductByCate = useCallback(async (branch) => {
      // if(!branch) {
      //    branch = 3434;
      // }
      const response = await axios.get(`http://localhost:5000/category/${id}/${branch}`);
      setProducts(response.data)
   }, [id])

   useEffect(() => {
      getType();
      getProductByCate();
   }, [getType, getProductByCate])

   // cart
   const { carts } = useSelector((state) => state.cart);

   const getCarts = useCallback(async (branch) => {
      dispatch(getCart(branch));
   }, [dispatch]);


   return (
      <>
         <Header header={true} getProducts = {getProductByCate} carts={carts} getCarts={getCarts}/>
         <MainHome />
         <CategoryDetail type={type} products={products} />
      </>
   )
}

export default CategoryDetailPage