import React from 'react';
import './Products.scss'

const Products = ({ Sdata }) => {
   return (
      <>
         <div className="products">
            {Sdata.map((value, index) => {
               return (
                  <div className="items" key={index}>
                     <div className="item">
                        <img src={value.cover} alt="" />
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
               )
            })}
         </div>
      </>
   )
}

export default Products