import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
   // toggle Menu
   const [MobileMenu, setMobileMenu] = useState(false)

   return (
      <>
         <header className='header'>
            <div className='nav-link flex_1 container'>
               <ul className={MobileMenu ? "nav-links-MobileMenu capitalize" : "nav-links-web flex_1 capitalize"} onClick={() => setMobileMenu(false)}>
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
                     <Link to='/vendor'>vendor account</Link>
                  </li>
                  <li>
                     <Link to='/track'>track my order</Link>
                  </li>
                  <li>
                     <Link to='/contact'>contact</Link>
                  </li>
               </ul>
               <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                  {MobileMenu ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
               </button>
            </div>
         </header>
      </>
   )
}

export default Navbar