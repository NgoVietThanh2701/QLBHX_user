import React from 'react'
import './CardProduct.scss';

const CardProduct = ({ value, index }) => {
   return (
      <>
         <div class="card-products" key={index}>
            <div className="card">
               <div className="image">
                  <img src={value.cover} alt="" />
               </div>
               <div className='name'>{value.desc}</div>
               <div className="sale">Giảm 10đ</div>
               <div className="sub">
                  <span className="price">500.000 </span>
                  <span className="quantity-sale">Đã bán 4.5k</span>
               </div>
            </div>
            <div className="discount">
               <div className="dis">25%</div>
               <div className="text">giảm</div>
               <div className="triangle"></div>
            </div>
         </div>
      </>
   )
}

export default CardProduct
