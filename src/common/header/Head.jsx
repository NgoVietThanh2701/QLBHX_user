import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser, reset } from '../../features/authSlice';

const Head = () => {

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { user } = useSelector((state) => state.auth);

   const logout = () => {
      dispatch(logOutUser());
      dispatch(reset());
      navigate("/login");
   }

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
                     <label>Trở thành người bán</label>
                  </Link>
                  <hr width="1" size="15" />
                  <Link>
                     <label>Tải ứng dụng</label>
                  </Link>
               </div>
               <div className='head-item'>
                  <i className="fa-solid fa-question"></i>
                  <Link>
                     <label>Hổ trợ</label>
                  </Link>
                  <Link to='/sign-up' >
                     <label>{user ? <ion-icon name="person-outline"></ion-icon> : "Đăng ký"}</label>
                  </Link>
                  {!user && <hr width="1" size="15" />}
                  <div className="profile">
                     <Link to='/login'>
                        <label>{user ? user.name : "Đăng nhập"}</label>
                     </Link>
                     {user && <div className="show">
                        <ul>
                           <li>Tài khoản của tôi</li>
                           <li>Đơn mua</li>
                           <li onClick={logout}>Đăng xuất</li>
                        </ul>
                     </div>}
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Head