import React from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
   return (
      <>
         <section className='head'>
            <div className="container flex_2">
               <div className='head-item'>
                  <Link>
                     <label>Kênh người bán</label>
                  </Link>
                  <hr width="1" size="15" />
                  <Link>
                     <label>Trở thành người bán DeftShop</label>
                  </Link>
                  <hr width="1" size="15" />
                  <Link>
                     <label>Tải ứng dụng</label>
                  </Link>
               </div>
               <div className='head-item'>
                  <i class="fa-solid fa-question"></i>
                  <Link>
                     <label>Hổ trợ</label>
                  </Link>
                  <Link>
                     <label>Đăng ký</label>
                  </Link>
                  <hr width="1" size="15" />
                  <Link className='text' to='/login'> {/* '/login': origin url | 'login': continues url*/}
                     <label>Đăng nhập</label>
                  </Link>
               </div>
            </div>
         </section>
      </>
   )
}

export default Head