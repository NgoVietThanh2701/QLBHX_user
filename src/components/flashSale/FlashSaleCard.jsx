import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FlashSaleCard = ({ products }) => {

   const settings = {
      dots: false,
      infinite: false, // don't click when end list
      slidesToShow: 6,
      slidesToScroll: 3,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
   }

   return (
      <>
         <Slider {...settings}>
            {products.map((product, index) => {
               if (product.discount > 0) {
                  return (
                     <div className="items" key={index}>
                        <div className="item">
                           <div className="image"> <img src={product.url} alt="" /></div>
                           <div className="price format-price">{product.price} </div>
                           <div className="quantity-sale">Đã bán chạy</div>
                        </div>
                        <div className="discount">
                           <div className="dis">{product.discount}%</div>
                           <div className="text">giảm</div>
                           <div className="triangle"></div>
                        </div>
                     </div>
                  )
               }
               return null;
            })}
         </Slider>
      </>
   )
}

export default FlashSaleCard

const SampleNextArrow = (props) => {
   const { onClick } = props;
   if (!onClick) return;
   return (
      <div className='control-btn-flash' onClick={onClick}>
         <button className='next'>
            <i className='fa fa-long-arrow-alt-right'></i>
         </button>
      </div>
   )
}

const SamplePrevArrow = (props) => {
   const { onClick } = props;
   if (!onClick) return;
   return (
      <div className='control-btn-flash' onClick={onClick}>
         <button className='prev'>
            <i className='fa fa-long-arrow-alt-left'></i>
         </button>
      </div>
   )
}