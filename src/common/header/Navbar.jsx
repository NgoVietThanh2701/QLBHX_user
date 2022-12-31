import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {

   return (
      <>
         <header className='header'>
            <ul className="capitalize">
               <li>
                  <Link to='/'>home</Link>
               </li>
               <li>
                  <Link to='/pages'>pages</Link>
               </li>
               <li>
                  <Link to='/user'>user account</Link>
               </li>
               <li>
                  <Link to='/contact'>contact</Link>
               </li>
               <li>
                  <Link to='/user'>user account</Link>
               </li>
               <li>
                  <Link to='/contact'>contact</Link>
               </li>
            </ul>
         </header>
      </>
   )
}

export default Navbar