import { useCallback, useState } from "react";
import Header from "../common/header/Header"
import axios from "axios";
import { CartDetail } from "../components/cart-detail/CartDetail";

export const CartPage = () => {

    const [products, setProducts] = useState([]);

    const getProducts = useCallback(async (branch) => {
        // if(!branch) {
        //    branch = 3434;
        // }
        const response = await axios.get(`http://localhost:5000/product/${branch}`);
        setProducts(response.data);
     }, []);

    return (
        <>
            <Header header={true} getProducts={getProducts}/>
            <CartDetail/>
        </>
    )
}