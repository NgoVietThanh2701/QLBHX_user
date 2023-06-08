import React, { useEffect, useState } from 'react'
import './ProductDetail.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from '@mui/material/Rating';
import PaginatedProducts from '../list-products/ListProducts'
import CardProduct from '../card-product/CardProduct';


const ProductDetail = ({ product, products }) => {

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
      slidesToScroll: 3,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
   }

   const settings_2 = {
      dots: false,
      infinite: false, // don't click when end list
      slidesToShow: 6,
      slidesToScroll: 3,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
   }

   useEffect(() => {
      setImageActive(product && product.PhotoProducts[0].url);
   },[product])

   const [imageActive, setImageActive] = useState("");
   const [quantity, setQuantity] = useState(1);
   const [color, setColor] = useState("");
   const [size, setSize] = useState("");

   return (
      <section className='product-detail'>
         <div className="link">
            <span>DeftShop </span>
            <i class="fa-solid fa-angle-right"></i>
            <span>{product && product.Type.name} </span>
            <i class="fa-solid fa-angle-right"></i>
            <span>{product && product.name}</span>
         </div>
         <div className="product">
            <div className="top">
               <div className="left">
                  <div className="image-main">
                     <img src={imageActive} alt="" />
                  </div>
                  <div className="image-list">
                     <Slider {...settings}>
                        {product && product.PhotoProducts.map((photo, index) => {
                           return <img key={index}
                              onClick={() => setImageActive(photo.url)}
                              src={photo.url} alt='' />
                        })}
                     </Slider>
                  </div>
               </div>
               <div className="right">
                  <div className="name">
                     {product && product.description}
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
                        <span>{product && product.sold} </span>
                        <span>đã bán</span>
                        <div>?</div>
                     </div>
                  </div>
                  <div className="div-price">
                     <del>   {product && product.price}</del>
                     <div className="price">{parseInt(product ? product.price: 0) - parseInt(product ? product.price: 0) * parseInt(product ? product.discount:0) / 100}</div>
                     <div className="discount">{product && product.discount}% giảm</div>
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
                     <span className="lb-qt">{product && product.stock} sản phẩm có sẵn</span>
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
                  <img src="/images/logo.jpg" alt="" />
               </div>
               <div className="div-info">
                  <span className='name-shop'>Bách hóa xanh</span>
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
                     <span>{product && product.Type.name}</span>
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
         <div className='other-product-title'>CÁC SẢN PHẨM KHÁC CỦA SHOP</div>
         <div className="product-shop">
            <Slider {...settings_2}>
               {products && products.map((value, index) => {
                  return (
                     <CardProduct product={value} index={index} />
                  )
               })}
            </Slider>
         </div>
         <div className='other-product-title'>CÓ THỂ BẠN CŨNG THÍCH</div>
         <PaginatedProducts items={[...products].reverse()} itemsPerPage={12} />
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