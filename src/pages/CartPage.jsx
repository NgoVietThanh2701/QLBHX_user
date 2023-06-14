import { useCallback, useState } from "react";
import Header from "../common/header/Header"
import axios from "axios";
import { CartDetail } from "../components/cart-detail/CartDetail";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../features/cartSlice";

export const CartPage = () => {

    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const getProducts = useCallback(async (branch) => {
        const response = await axios.get(`http://localhost:5000/product/${branch}`);
        setProducts(response.data);
     }, []);

    
    // cart
    const { carts } = useSelector((state) => state.cart);
    const getCarts = useCallback(async (branch) => {
        dispatch(getCart(branch));
    }, [dispatch]);

    return (
        <>
            <Header header={true} getProducts={getProducts} carts={carts} getCarts={getCarts}/>
            <CartDetail/>
        </>
    )
}