import React, { useState } from 'react'
import PaginatedProducts from '../list-products/ListProducts'
import './CategoryDetail.scss'

const CategoryDetail = ({ type, products }) => {

   const [sortOption, setSortOption] = useState(1);


   const renderSwitchSort = (param) => {
      switch (param) {
         case 1: return products;
         case 2: return [...products].sort((a, b) => b.id - a.id);
         //case 3: return [...products].filter(time => time.id > 20);
         case 3: return [...products].sort((a, b) => b.discount - a.discount);
         default: return products;
      }
   }

   return (
      <section className='category-detail'>
         <div className="left">
            <div className="title">
               <i class="fa-solid fa-list"></i>
               <span>Danh mục</span>
            </div>
            <div className="hr"></div>
            <div className="top">
               <div className="category-name active-type">{type[0] && type[0].category.name}</div>
               <div className="sub-category capitalize">
                  {type && type.map((value, index) => {
                     return (
                        <span key={index}>
                           {value.name}
                        </span>
                     )
                  })}
               </div>
            </div>
            <div className="bottom">
               <span className="filter">BỘ LỌC TÌM KIẾM</span>
            </div>
         </div>

         <div className="right">
            <div className="top">
               <div className="sort-title">Sắp xếp theo</div>
               <div onClick={() => setSortOption(1)} className={sortOption === 1 ? "option active" : "option"}>Phổ biến</div>
               <div onClick={() => setSortOption(2)} className={sortOption === 2 ? "option active" : "option"}>Mới nhất</div>
               <div onClick={() => setSortOption(3)} className={sortOption === 3 ? "option active" : "option"}>Giảm giá</div>
            </div>
            {type.length > 0 ?
               <PaginatedProducts items={renderSwitchSort(sortOption)}
                  itemsPerPage={products.length % 5 === 0 ? products.length : parseInt(products.length / 5) * 5} />
               : <div className='check-null'>Danh mục hiện chưa có sản phẩm!</div>}
         </div>
      </section>
   )
}

export default CategoryDetail