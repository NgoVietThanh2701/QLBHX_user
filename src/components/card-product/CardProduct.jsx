import React from 'react'
import './CardProduct.scss';

const CardProduct = ({ product, index }) => {
   return (
      <div className="card-products" key={index}>
         <div className="card">
            <div className="image">
               <img src={product && product.PhotoProducts[0].url} alt="" />
            </div>
            <div className='name'>{product && product.name}</div>
            <div className='name'>{product && product.description}</div>
            <div className="sale">Giảm 10đ</div>
            <div className="sub">
               <span className="price format-price">{product && product.price} </span>
               <span className="quantity-sale">Đã bán {product.sold}</span>
            </div>
         </div>
         {product && product.discount > 0 && <div className="discount">
            <div className="dis">{product && product.discount}%</div>
            <div className="text">giảm</div>
            <div className="triangle"></div>
         </div>}
      </div>
   )
}

export default CardProduct
