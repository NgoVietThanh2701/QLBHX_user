import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {

   return (
      <>
         <header className='header'>
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