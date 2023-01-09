import React, { useState } from 'react'
import './ProductDetail.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from '@mui/material/Rating';

const ProductDetail = () => {

   const Sdata = [
      {
         id: 1,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: '../images/products/product_5.jpg',
      },
      {
         id: 2,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: '../images/products/product_1.jpg',
      },
      {
         id: 1,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: '../images/products/product_2.jpg',
      },
      {
         id: 2,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: '../images/products/product_3.jpg',
      },
      {
         id: 1,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: '../images/products/product_4.jpg',
      },
      {
         id: 2,
         title: "50% Off For Your First Shopping",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
         cover: '../images/products/product_5.jpg',
      },
   ]

   const attribute = [
      {
         id: 1,
         name: "Mau sac",
         option: [
            'Trang',
            'đỏ',
            'Xanh'
         ]
      },
      {
         id: 2,
         name: "Kích cỡ",
         option: [
            'Size L',
            'Size M',
            'Size XL',
            'Size XXL'
         ]
      }
   ]

   const settings = {
      dots: false,
      infinite: false, // don't click when end list
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
   }

   const [imageActive, setImageActive] = useState(Sdata[0].cover);
   const [quantity, setQuantity] = useState(1);
   const [color, setColor] = useState("");
   const [size, setSize] = useState("");

   return (
      <section className='product-detail'>
         <div className="link">
            <span>DeftShop </span>
            <i class="fa-solid fa-angle-right"></i>
            <span>Thoi trang nam  </span>
            <i class="fa-solid fa-angle-right"></i>
            <span>Quan nam </span>
            <i class="fa-solid fa-angle-right"></i>
            <span>Ao Nam chat luong cao phu hop moi do tuoi</span>
         </div>
         <div className="product">
            <div className="top">
               <div className="left">
                  <div className="image-main">
                     <img src={imageActive} alt="" />
                  </div>
                  <div className="image-list">
                     <Slider {...settings}>
                        {Sdata.map((value, index) => {
                           return <img key={index}
                              onClick={() => setImageActive(value.cover)}
                              src={value.cover} alt='' />
                        })}
                     </Slider>
                  </div>
               </div>
               <div className="right">
                  <div className="name">
                     {Sdata[1].title}
                  </div>
                  <div className="div-info">
                     <div className="eva-star">
                        <span>4.7</span>
                        <Rating className='star' name="half-rating-read"
                           defaultValue={3.5} precision={0.5} readOnly />
                     </div>
                     <div className="div-hr"></div>
                     <div className="evaluate">
                        <span>148</span>
                        <span>đánh giá</span>
                     </div>
                     <div className="div-hr"></div>
                     <div className="div-sold">
                        <span>500 </span>
                        <span>đã bán</span>
                        <div>?</div>
                     </div>
                  </div>
                  <div className="div-price">
                     <del>311.000</del>
                     <div className="price">50.000</div>
                     <div className="discount">40% giảm</div>
                  </div>
                  <div className="div-deal">
                     <span>Deal sốc</span>
                     <span>Mua kèm Deal sốc</span>
                  </div>
                  {attribute.map((value, index) => {
                     return (
                        <div className="div-attribute" key={index}>
                           <div>{value.name}</div>
                           <div>
                              {value.option.map((op, id) => {
                                 return (
                                    <span className={index === 0 ? (color === id ? 'selected' : '') : (size === id ? 'selected' : '')}
                                       onClick={() => index === 0 ? setColor(id) : setSize(id)}
                                       key={id}>
                                       {op}
                                    </span>
                                 )
                              })}
                           </div>
                        </div>
                     )
                  })}
                  <div className="div-quantity">
                     <span className='lb-qt'>Số lượng</span>
                     <div className="quantity">
                        <span onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</span>
                        <span>{quantity}</span>
                        <span onClick={() => setQuantity(quantity + 1)}>+</span>
                     </div>
                     <span className="lb-qt">1230 sản phẩm có sẵn</span>
                  </div>
                  <div className="div-action">
                     <button>Thêm vào giỏ hàng</button>
                     <button>Mua ngay</button>
                  </div>
                  <div className="commit-shop">
                     <span>DeftShop đảm bảo</span>
                     <span>3 Ngày trả hàng / Hoàn tiền</span>
                  </div>
               </div>
            </div>
            <div className="shop">
               <div className="avatar">
                  <img src={Sdata[0].cover} alt="" />
               </div>
               <div className="div-info">
                  <span className='name-shop'>Ngo viet thanh Shop</span>
                  <span> Online 11 phút trước</span>
                  <div>
                     <span><i class="fa-regular fa-message"></i>Chát ngay</span>
                     <span><i class="fa-regular fa-square-minus"></i>Xem Shop</span>
                  </div>
               </div>
               <div className="div-sub">
                  <div>
                     <span>Tham gia</span>
                     <span>13 tháng trước</span>
                  </div>
                  <div>
                     <span>Sản phẩm</span>
                     <span>562</span>
                  </div>
               </div>
               <div className="div-sub">
                  <div>
                     <span>Đánh giá</span>
                     <span> 2.2k</span>
                  </div>
                  <div>
                     <span>Tỉ lệ phản hồi</span>
                     <span>80%</span>
                  </div>
               </div>
            </div>
            <div className="des-product">
               <div className="detail">
                  <p className='title uppercase'>Chi tiết sản phẩm</p>
                  <div className="item">
                     <span>Danh mục</span>
                     <span>Váy Nữ</span>
                  </div>
                  <div className="item">
                     <span>Chất liệu</span>
                     <span>Cotton</span>
                  </div>
                  <div className="item">
                     <span>Xuất xứ</span>
                     <span>Trung quốc</span>
                  </div>
               </div>
               <div className="des">
                  <p className='title uppercase'>Mô tả sản phẩm</p>
                  <div className="content">
                     <p>Các sp của shop đa số đều có đăng kèm ảnh thật sp ở cuối</p>
                     <p>Khi đặt hàng các bạn đọc kỹ thông tin
                        sp và đặt đơn với đúng màu và số lượng để tránh gửi hàng nhầm lẫn ạ.</p>
                     <p>Nếu anh chị có hỗ trợ gì về sản phẩm , anh chị vui long chát với
                        shop để đc nhân viên tư vấn và hỗ trợ cụ thể cho anh chị ạ</p>
                  </div>
               </div>
            </div>
         </div>
      </section >
   )
}

export default ProductDetail

const SampleNextArrow = (props) => {
   const { onClick } = props;
   if (!onClick) return;
   return (
      <div className='control-btn' onClick={onClick}>
         <button className='next'>
            <i className='fa fa-long-arrow-alt-right'></i>
         </button>
      </div>
   )
}

const SamplePrevArrow = (props) => {
   const { onClick } = props;
   if (!onClick) return;
   return (
      <div className='control-btn' onClick={onClick}>
         <button className='prev'>
            <i className='fa fa-long-arrow-alt-left'></i>
         </button>
      </div>
   )
}