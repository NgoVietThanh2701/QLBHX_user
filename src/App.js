import React from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./common/header/Header";
import Home from "./pages/Home";
import Footer from "./common/footer/Footer";
import Category from "./pages/Category";
import ProductDetail from "./components/product-detail/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="category-detail" >
            <Route index element={<Category />} />
            <Route path="products" element={<ProductDetail />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
