import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"

const CategoryCard = () => {

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
         id: 9,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_3.png',
      },
      {
         id: 10,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_4.png',
      },
      {
         id: 11,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_2.png',
      },
      {
         id: 12,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_1.png',
      },
      {
         id: 13,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_6.png',
      },
      {
         id: 14,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_3.png',
      },
      {
         id: 15,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_2.png',
      },
      {
         id: 16,
         title: "50% Off  First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_3.png',
      },
      {
         id: 17,
         title: "50% First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_3.png',
      },
      {
         id: 18,
         title: "50% Off First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_3.png',
      },
      {
         id: 19,
         title: "Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_2.png',
      },
      {
         id: 20,
         title: "First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_5.png',
      },
   ]

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
                        <Link to='/category-detail'>
                           <div className="item">
                              <img className='icon-circle' src={value.cover} alt="" />
                              <span>{value.title + value.id}</span>
                           </div>
                        </Link>
                        <hr />
                        <div className="item">
                           <img className='icon-circle' src={Sdata[index + 1].cover} alt="" />
                           <span>{Sdata[index + 1].title + Sdata[index + 1].id}</span>
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
