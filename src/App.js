import React from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import Footer from "./common/footer/Footer";
import CategoryDetailPage from "./pages/CategoryDetailPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AuthPage from "./pages/AuthPage";
import { CartPage } from "./pages/CartPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="category/:id" >
            <Route index element={<CategoryDetailPage />} />
            <Route path=":id_product" element={<ProductDetailPage />} />
          </Route>
          <Route path="login" element={<AuthPage auth={true} />} />
          <Route path="sign-up" element={<AuthPage auth={false} />} />
          <Route path="cart" element={<CartPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
