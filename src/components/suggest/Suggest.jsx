import React, { useState } from 'react'
import CardProduct from '../card-product/CardProduct';
import './Suggest.scss';

const Suggest = ({ products }) => {

   const [toggleState, setToggleState] = useState(1);

   const toggleTab = (index) => {
      setToggleState(index);
   }

   // fixed Header
   window.addEventListener("scroll", function () {
      const topBar = document.querySelector(".bloc-tabs")
      if(topBar) {topBar.classList.toggle("scroll-suggest", window.scrollY > 945)}
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
                  {products && products.map((product, index) => {
                     if (index < 24) {
                        return (
                           <CardProduct product={product} index={index} />
                        )
                     }
                     return null;
                  })}
               </div>
               <div className={toggleState === 2 ? "active-content" : "content"}>
                  {products && products.reverse().map((product, index) => {
                     return (
                        <CardProduct product={product} index={index} />
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