import React from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import Footer from "./common/footer/Footer";
import CategoryDetailPage from "./pages/CategoryDetailPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="category-detail" >
            <Route index element={<CategoryDetailPage />} />
            <Route path="products" element={<ProductDetailPage />} />
          </Route>
          <Route path="login" element={<AuthPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
