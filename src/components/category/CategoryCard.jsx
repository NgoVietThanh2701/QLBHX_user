import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"
import { Sdata } from '../data';

const CategoryCard = ({ category }) => {

   const settings = {
      dots: false,
      infinite: false, // don't click when end list
      slidesToShow: 7,
      slidesToScroll: 3,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
   }

   return (
      <>
         <Slider {...settings}>
            {Sdata.map((value, index) => {
               if (index % 2 === 0) {
                  return (
                     <div key={index} className='items'>
                        <Link to={category[index] && `/category-detail/${category[index].uuid}`}>
                           <div className="item">
                              <img className='icon-circle' src={value.cover} alt="" />
                              <span>{category[index] && category[index].name}</span>
                           </div>
                        </Link>
                        <hr />
                        <Link to={category[index] && `/category-detail/${category[index + 1].uuid}`}>
                           <div className="item">
                              <img className='icon-circle' src={Sdata[index + 1].cover} alt="" />
                              <span>{category[index] && category[index + 1].name}</span>
                           </div>
                        </Link>
                     </div>
                  )
               }
               return null;
            })}
         </Slider>
      </>
   )
}

export default CategoryCard;

const SampleNextArrow = (props) => {
   const { onClick } = props;
   if (!onClick) return;
   return (
      <div className='control-btn-cate' onClick={onClick}>
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
      <div className='control-btn-cate' onClick={onClick}>
         <button className='prev'>
            <i className='fa fa-long-arrow-alt-left'></i>
         </button>
      </div>
   )
}
