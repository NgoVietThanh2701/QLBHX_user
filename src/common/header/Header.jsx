import React from 'react'
import Head from './Head'
import './Header.scss';
import Navbar from './Navbar';
import Search from './Search';

const Header = ({ header, getProducts, carts, getCarts }) => {
   // fixed Header
   window.addEventListener("scroll", function () {
      const topBar = document.querySelector(".topBar")
      if(topBar) {
       topBar.classList.toggle("active", window.scrollY > 100)
      }
   });

   return (
      <div className={header ? 'topBar' : ''}>
         <Head/>
         <Search carts={carts}/>
         <Navbar getProducts={getProducts} getCarts={getCarts}/>
      </div>
   )
}

export default Header