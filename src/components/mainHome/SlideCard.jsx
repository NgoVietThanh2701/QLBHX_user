import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCard = () => {
   const Sdata = [
      {
         id: 1,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: "./images/banner/banner_1.png",
      },
      {
         id: 2,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: "./images/banner/banner_4.png",
      },
      {
         id: 3,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: "./images/banner/banner_1.png",
      },
      {
         id: 3,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: "./images/banner/banner_4.png",
      },
      {
         id: 3,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: "./images/banner/banner_5.png",
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
                  <>
                     <div key={index}>
                        <img src={value.cover} alt="" />
                     </div>
                  </>
               )
            })}
         </Slider>
      </>
   )
}

export default SlideCard