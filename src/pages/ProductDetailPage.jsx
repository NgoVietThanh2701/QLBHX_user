import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../common/header/Header'
import ProductDetail from '../components/product-detail/ProductDetail'
import { useDispatch, useSelector } from 'react-redux'
import { getMeUser } from '../features/authSlice'
import { getCart } from '../features/cartSlice'

const ProductDetailPage = () => {

   const dispatch = useDispatch();
   const checkUserLoggedIn = useCallback (() => (dispatch) => {
      dispatch(getMeUser());
   }, [])

   useEffect(() => {
      dispatch(checkUserLoggedIn());
   }, [checkUserLoggedIn, dispatch]);

   const { id, id_product } = useParams();
   const [product, setProduct] = useState();
   const [products, setProducts] = useState([]);

   const getProduct = useCallback(async () => {
      const response = await axios.get(`http://localhost:5000/productbyID/${id_product}`);
      setProduct(response.data);
   }, [id_product]);

   const getProductByCate = useCallback(async (branch) => {
      const response = await axios.get(`http://localhost:5000/category/${id}/${branch}`);
      setProducts(response.data)
   }, [id])

   useEffect(() => {
      getProduct();
   },[getProduct])

   // cart
   const { carts } = useSelector((state) => state.cart);
   const getCarts = useCallback(async (branch) => {
      dispatch(getCart(branch));
   }, [dispatch]);

   return (
      <>
         <Header header={false} getProducts = {getProductByCate} carts={carts} getCarts={getCarts}/>
         <ProductDetail product={product} products={products} />
      </>
   )
}

export default ProductDetailPage