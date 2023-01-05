import React, { useState } from 'react'
import './ProductDetail.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from '@mui/material/Rating';

const ProductDetail = () => {

   const Sdata = [
      {
         id: 1,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: '../images/products/product_5.jpg',
      },
      {
         id: 2,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: '../images/products/product_1.jpg',
      },
      {
         id: 1,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: '../images/products/product_2.jpg',
      },
      {
         id: 2,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: '../images/products/product_3.jpg',
      },
      {
         id: 1,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: '../images/products/product_4.jpg',
      },
      {
         id: 2,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: '../images/products/product_5.jpg',
      },
   ]

   const attribute = [
      {
         id: 1,
         name: "Mau sac",
         option: [
            'Trang',
            'đỏ',
            'Xanh'
         ]
      },
      {
         id: 2,
         name: "Size",
         option: [
            'L',
            'M',
            'XL',
            'LLL'
         ]
      }
   ]

   const settings = {
      dots: false,
      infinite: false, // don't click when end list
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
   }

   const [imageActive, setImageActive] = useState(Sdata[0].cover);

   const toggleImage = (img) => {
      setImageActive(img);
   }

   return (
      <section className='product-detail'>
         <div className="link">
            <span>DeftShop </span>
            <i class="fa-solid fa-angle-right"></i>
            <span>Thoi trang nam  </span>
            <i class="fa-solid fa-angle-right"></i>
            <span>Quan nam </span>
            <i class="fa-solid fa-angle-right"></i>
            <span>Ao Nam chat luong cao phu hop moi do tuoi</span>
         </div>
         <div className="product">
            <div className="top">
               <div className="left">
                  <div className="image-main">
                     <img src={imageActive} alt="" />
                  </div>
                  <div className="image-list">
                     <Slider {...settings}>
                        {Sdata.map((value, index) => {
                           return <img key={index}
                              onClick={() => toggleImage(value.cover)}
                              src={value.cover} alt='' />
                        })}
                     </Slider>
                  </div>
               </div>
               <div className="right">
                  <div className="name">
                     {Sdata[1].title}
                  </div>
                  <div className="div-info">
                     <div className="eva-star">
                        <span>4.7</span>
                        <Rating className='star' name="half-rating-read"
                           defaultValue={3.5} precision={0.5} readOnly />
                     </div>
                     <div className="div-hr"></div>
                     <div className="evaluate">
                        <span>148</span>
                        <span>đánh giá</span>
                     </div>
                     <div className="div-hr"></div>
                     <div className="div-sold">
                        <span>500 </span>
                        <span>đã bán</span>
                        <div>?</div>
                     </div>
                  </div>
                  <div className="div-price">
                     <del>311.000</del>
                     <div className="price">50.000</div>
                     <div className="discount">40% giảm</div>
                  </div>
                  <div className="deal">
                     <span>Deal sốc</span>
                     <span>Mua kèm Deal sốc</span>
                  </div>
                  {attribute.map((value, index) => {
                     return (
                        <div className="attribute" key={index}>
                           <div>{value.name}</div>
                           <div>
                              {value.option.map((op, index) => {
                                 return (
                                    <span key={index}>{op}</span>
                                 )
                              })}
                           </div>
                        </div>
                     )
                  })}
               </div>
            </div>
            <div className="body">

            </div>
            <div className="bottom">

            </div>
         </div>
      </section >
   )
}

export default ProductDetail

const SampleNextArrow = (props) => {
   const { onClick } = props;
   if (!onClick) return;
   return (
      <div className='control-btn' onClick={onClick}>
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
      <div className='control-btn' onClick={onClick}>
         <button className='prev'>
            <i className='fa fa-long-arrow-alt-left'></i>
         </button>
      </div>
   )
}