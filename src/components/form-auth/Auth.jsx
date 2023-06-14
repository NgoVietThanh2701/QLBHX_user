import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Auth.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, reset } from '../../features/authSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const Auth = ({ auth }) => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const {user, isSuccess, isLoading} = useSelector(
      (state) => state.auth
   );

   useEffect(() => {
      if(user || isSuccess) {
         navigate("/");
      }
      dispatch(reset());
   }, [user, isSuccess, dispatch, navigate]);

   const login = (e) => {
      e.preventDefault();
      dispatch(loginUser({email, password}));
   } 

   return (
      <>
         <section className="auth">
            <div className="title-auth">
               <Link to="/">
                  <div>
                     {/* <i className="fa-solid fa-bag-shopping"></i> */}
                     <img src="./images/logo.jpg" alt="" />
                     <span>Bách hóa xanh</span>
                     <span>{auth ? 'Đăng nhập' : 'Đăng ký'}</span>
                  </div>
               </Link>
               <span className='support'>Bạn cần giúp đỡ?</span>
            </div>
            <div className="body">
               <div className="left">
                  <img src='./images/bach-hoa-xanh.jpg' alt='' />
               </div>
               <div className="right">
                  {auth ?
                     <form onSubmit={login}>
                        <div className='title'>{auth ? 'Đăng nhập' : 'Đăng ký'}</div>
                        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {/* {isError && toast.error(message, {position: toast.POSITION.BOTTOM_RIGHT})} */}
                        {isLoading ? "Loading..." : <input type="submit" value='Đăng nhập' />}
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
                        <input type="password" placeholder="Mật khẩu" />
                        <input type="password" placeholder="Nhập lại Mật khẩu" />
                        <input type="submit" value='Đăng Ký' />
                        <div className="strike">
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
         <ToastContainer/>
      </>
   )
}

export default Auth