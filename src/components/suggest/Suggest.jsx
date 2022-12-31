import React, { useState } from 'react'
import './Suggest.scss';

const Suggest = () => {

   const [toggleState, setToggleState] = useState(1);

   const toggleTab = (index) => {
      setToggleState(index);
   }

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
         cover: './images/category/category_6.png',
      },
      {
         id: 10,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_1.png',
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
         cover: './images/category/category_2.png',
      },
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
         cover: './images/category/category_6.png',
      },
      {
         id: 10,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_1.png',
      },
      {
         id: 11,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_2.png',
      },
      {
         id: 11,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: './images/category/category_2.png',
      },
   ]

   // fixed Header
   window.addEventListener("scroll", function () {
      const topBar = document.querySelector(".bloc-tabs")
      topBar.classList.toggle("scroll-suggest", window.scrollY > 945)
   });

   return (
      <>
         <div className="suggest">
            <div className="bloc-tabs">
               <button
                  className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(1)}>
                  GỢI Ý HÔM NAY
               </button>
               <button
                  className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(2)}>
                  HÀNG MỚI
               </button>
            </div>

            <div className="content-tabs">
               <div className={toggleState === 1 ? "active-content" : "content"}>
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
               <div className={toggleState === 2 ? "active-content" : "content"}>
                  {Sdata.reverse().map((value, index) => {
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
            </div>
            <div className="btn-view-all">Xem them</div>
         </div>
      </>
   )
}

export default Suggest