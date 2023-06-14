import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Search = ({carts}) => {

   const { user } = useSelector((state) => state.auth);

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
                  <div className='item'>
                     <i className="fa-sharp fa-solid fa-bell"></i>
                     <span className='count-item'>0</span>
                  </div>
                  <div className="item">
                     <i className="fa-solid fa-cart-shopping"></i>
                     <span className='count-item'>0</span>
                     {user &&
                     <div className="show-cart">
                        <span className="title-cart">Sản phẩm mới thêm</span>
                        <hr className='hr'/>
                        <ul  className='list-cart'>
                           {carts && (carts.map(cart => (
                              <li className='item-cart'>
                                 <img src={cart.Product.PhotoProducts[0].url} alt="" />
                                 <span className='name'>{cart.Product.name}</span>
                                 <span className='count'>x {cart.quantity}</span>
                                 <span className='price'>{cart.Product.price}</span>
                              </li>
                           )))
                           }
                        </ul>
                        <Link to="/cart">
                           <button className='btn-cart'>Xem giỏ hàng</button>
                        </Link>
                     </div>
                     }  
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Search