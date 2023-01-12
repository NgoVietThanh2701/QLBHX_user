import React from 'react'
import { Link } from 'react-router-dom'
import './Auth.scss'

const Auth = ({ auth }) => {
   return (
      <>
         <section className="auth">
            <div className="title-auth">
               <Link to='/'>
                  <div>
                     <i class="fa-solid fa-bag-shopping"></i>
                     <span>DeftShop</span>
                     <span>{auth ? 'Đăng nhập' : 'Đăng ký'}</span>
                  </div>
               </Link>
               <span className='support'>Bạn cần giúp đỡ?</span>
            </div>
            <div className="body">
               <div className="left">
                  <img src='./images/background.jpg' alt='' />
               </div>
               <div className="right">
                  {auth ?
                     <form>
                        <div className='title'>{auth ? 'Đăng nhập' : 'Đăng ký'}</div>
                        <input type="text" placeholder="Email" />
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
                           <Link to='/sign-up'>
                              <span>Đăng ký</span>
                           </Link>
                        </div>
                     </form>
                     : <form>
                        <div className='title'>Đăng Ký</div>
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Tên" />
                        <input type="text" placeholder="Mật khẩu" />
                        <input type="text" placeholder="Nhập lại Mật khẩu" />
                        <input type="submit" value='Đăng Ký' />
                        <div class="strike">
                           <span>HOẶC</span>
                        </div>
                        <div className='advise'>
                           <span>Bạn đã có tài khoản?</span>
                           <Link to='/login'>
                              <span>Đăng nhập</span>
                           </Link>
                        </div>
                     </form>
                  }
               </div>
            </div>
         </section>
      </>
   )
}

export default Auth