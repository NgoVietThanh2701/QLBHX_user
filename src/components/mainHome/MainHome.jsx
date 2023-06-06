import React from 'react'
import './MainHome.scss';
import SlideCard from './SlideCard';

const MainHome = () => {
   return (
      <>
         <section className='background'>
            <div className='main-home'>
               <div className="left-slider">
                  <SlideCard />
               </div>
               <div className="right-slider">
                  <div className="right-top">
                     <img src='../images/banner/banner_1.jpg' alt='' />
                  </div>
                  <div className="right-bottom">
                     <img src='../images/banner/banner_3.jpg' alt='' />
                  </div>
               </div>
            </div>
            <div className="services">
               <div className="service">
                  <img src='../images/service/service_1.png' alt='' />
                  <span className='capitalize'>Gì Cũng rẻ - mua là FreeShip</span>
               </div>
               <div className="service">
                  <img src='../images/service/service_2.png' alt='' />
                  <span className='capitalize'>Miễn phí vận chuyển</span>
               </div>
               <div className="service">
                  <img src='../images/service/service_3.png' alt='' />
                  <span className='capitalize'>Bắt trend - Giá sốc</span>
               </div>
               <div className="service">
                  <img src='../images/service/service_4.png' alt='' />
                  <span className='capitalize'>Hàng Quốc tế</span>
               </div>
               <div className="service">
                  <img src='../images/service/service_5.png' alt='' />
                  <span className='capitalize'>Khung giờ săn sale</span>
               </div>
               <div className="service">
                  <img src='../images/service/service_1.png' alt='' />
                  <span className='capitalize'>Gì Cũng rẻ - mua là FreeShip</span>
               </div>
               <div className="service">
                  <img src='../images/service/service_2.png' alt='' />
                  <span className='capitalize'>Miễn phí vận chuyển</span>
               </div>
               <div className="service">
                  <img src='../images/service/service_3.png' alt='' />
                  <span className='capitalize'>Bắt trend - Giá sốc</span>
               </div>
            </div>
         </section>
      </>
   )
}

export default MainHome