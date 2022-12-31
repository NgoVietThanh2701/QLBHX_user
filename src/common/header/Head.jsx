import React from 'react';

const Head = () => {
   return (
      <>
         <section className='head'>
            <div className="container flex_2">
               <div className='head-item'>
                  <label>Kênh người bán</label>
                  <hr width="1" size="15" />
                  <label>Trở thành người bán DeftShop</label>
               </div>
               <div className='head-item'>
                  <i class="fa-solid fa-question"></i>
                  <label>Hổ trợ</label>
                  <label>Đăng ký</label>
                  <hr width="1" size="15" />
                  <label>Đăng nhập</label>
               </div>
            </div>
         </section>
      </>
   )
}

export default Head