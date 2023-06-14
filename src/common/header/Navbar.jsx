import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
const Navbar = ({getProducts, getCarts}) => {

   const [branch, setBranch] = useState(3434)

   useEffect(() => {
      getProducts(branch);
      getCarts(branch);
   }, [getProducts, getCarts, branch]);

   return (
      <>
         <header className='header'>
               <select className='container-select' value={branch} onChange={(e) => setBranch(e.target.value)}>
                     <option className='option' value='3434'>--- Chi nhánh ---</option>
                     <option className='option' value='3435'>Đà nẵng</option>
                     <option className='option' value='3436'>Hồ chí Mình</option>
                     <option className='option' value='3437'>Hà Nội</option>
               </select>
          
            <ul className="capitalize">
               <li>
                  <Link to='/'>Váy</Link>
               </li>
               <li>
                  <Link to='/'>Áo thun</Link>
               </li>
               <li>
                  <Link to='/'>Dép</Link>
               </li>
               <li>
                  <Link to='/'>Bóng đá</Link>
               </li>
               <li>
                  <Link to='/'>Tai nge Bluetooth</Link>
               </li>
            </ul>
         </header>
      </>
   )
}

export default Navbar