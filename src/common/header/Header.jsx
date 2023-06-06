import React from 'react'
import Head from './Head'
import './Header.scss';
import Navbar from './Navbar';
import Search from './Search';

const Header = ({ header, getProducts }) => {
   // fixed Header
   window.addEventListener("scroll", function () {
      const topBar = document.querySelector(".topBar")
      topBar.classList.toggle("active", window.scrollY > 100)
   });

   return (
      <div className={header ? 'topBar' : ''}>
         <Head />
         <Search />
         <Navbar getProducts={getProducts}/>
      </div>
   )
}

export default Header