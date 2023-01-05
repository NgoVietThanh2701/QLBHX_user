import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FlashSaleCard = () => {

   const Sdata = [
      {
         id: 1,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_1.png',
      },
      {
         id: 2,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_2.png',
      },
      {
         id: 3,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_3.png',
      },
      {
         id: 4,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_4.png',
      },
      {
         id: 5,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_5.png',
      },
      {
         id: 6,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_6.png',
      },
      {
         id: 7,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_1.png',
      },
      {
         id: 8,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_2.png',
      },
      {
         id: 6,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_6.png',
      },
      {
         id: 7,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_1.png',
      },
      {
         id: 8,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_2.png',
      }
   ]

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
            {Sdata.map((value, index) => {
               return (
                  <div className="items" key={index}>
                     <div className="item">
                        <img src={value.cover} alt="" />
                        <div className="price">đ 500.000 </div>
                        <div className="quantity-sale">Đã bán chạy</div>
                     </div>
                     <div className="discount">
                        <div className="dis">25%</div>
                        <div className="text">giảm</div>
                        <div className="triangle"></div>
                     </div>
                  </div>
               )
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