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
                     <img src='./images/banner/banner_2.png' alt='' />
                  </div>
                  <div className="right-bottom">
                     <img src='./images/banner/banner_3.png' alt='' />
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default MainHome