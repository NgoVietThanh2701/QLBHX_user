import React from 'react'
import './Auth.scss'

const Auth = () => {
   return (
      <>
         <section className="auth">
            <div className="title-auth">
               <div>
                  <i class="fa-solid fa-bag-shopping"></i>
                  <span>DeftShop</span>
                  <span>Đăng nhập</span>
               </div>
               <span className='support'>Bạn cần giúp đỡ?</span>
            </div>
            <div className="body">
               <div className="left">
                  <img src='./images/background.jpg' alt='' />
               </div>
               <div className="right">
                  <form>
                     <div className='title'>Đăng nhập</div>
                     <input type="text" placeholder="Tên đăng nhập" />
                     <input type="text" placeholder="Mật khẩu" />
                     <input type="submit" value='Đăng nhập' />
                     <div className='forgot'>
                        <span>Quên mật khẩu</span>
                        <span>Đăng nhập với SMS</span>
                     </div>
                     <div class="strike">
                        <span>HOẶC</span>
                     </div>
                     <div className='advise'>
                        <span>Bạn mới biết đến DeftShop?</span>
                        <span>Đăng ký</span>
                     </div>
                  </form>
               </div>
            </div>
         </section>
      </>
   )
}

export default Auth