import React from 'react'
import { Link } from 'react-router-dom'

const Search = () => {

   return (
      <>
         <section className='search'>
            <div className="container flex_2">
               <div className="logo">
                  <img src="/images/logo.jpg" alt="" />
                  <Link to='/'><span>Bách hóa xanh</span></Link>
               </div>
               <div className="search-box flex_2">
                  <input type='text' placeholder='Search and hit enter...' />
                  <i className='fa fa-search'></i>
               </div>
               <div className='items' style={{ display: 'flex', justifyContent: 'end' }}>
                  <div className="item">
                     <i className="fa-solid fa-cart-shopping"></i>
                     <span>0</span>
                  </div>
                  <div className='item'>
                     <i className="fa-sharp fa-solid fa-bell"></i>
                     <span>0</span>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Search