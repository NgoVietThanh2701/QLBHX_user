import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCard = () => {
   const Sdata = [
      {
         id: 1,
         cover: "../images/banner/banner_1.jpg",
      },
      {
         id: 2,
         cover: "../images/banner/banner_3.jpg",
      },
      {
         id: 3,
         cover: "../images/banner/banner_5.jpg",
      },
      {
         id: 4,
         cover: "../images/banner/banner_6.jpg",
      },
      {
         id: 5,
         cover: "../images/banner/banner_3.jpg",
      },
      {
         id: 6,
         cover: "../images/banner/banner_5.jpg",
      },
   ]
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      appendDots: (dots) => {
         return <ul style={{ margin: "0px" }}>{dots}</ul>
      },
   }
   return (
      <>
         <Slider {...settings}>
            {Sdata.map((value, index) => {
               return (
                  <div key={index}>
                     <img key={index} src={value.cover} alt="" />
                  </div>
               )
            })}
         </Slider>
      </>
   )
}

export default SlideCard