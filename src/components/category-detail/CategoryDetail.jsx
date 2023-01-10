import React, { useState } from 'react'
import PaginatedProducts from '../list-products/ListProducts'
import './CategoryDetail.scss'
import { Sdata } from '../data';

const CategoryDetail = () => {

   const [sortOption, setSortOption] = useState(1);

   const renderSwitch = (param) => {
      switch (param) {
         case 1: return Sdata;
         case 2: return Sdata.reverse();
         default: return Sdata;
      }
   }

   const option = (index) => {
      setSortOption(index);
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
               <div className="category-name">Thoi trang nam</div>
               <div className="sub-category capitalize">
                  <span>Ao khoac nam</span>
                  <span>Quan nam</span>
                  <span>quan the thao</span>
                  <span>Ao </span>
                  <span>Ao  nam</span>
               </div>
            </div>
            <div className="bottom">
               <span className="filter">BỘ LỌC TÌM KIẾM</span>
            </div>
         </div>

         <div className="right">
            <div className="top">
               <div className="sort-title">Sắp xếp theo</div>
               <div onClick={() => option(1)} className={sortOption === 1 ? "option active" : "option"}>Phổ biến</div>
               <div onClick={() => option(2)} className={sortOption === 2 ? "option active" : "option"}>Mới nhất</div>
               <div onClick={() => option(3)} className={sortOption === 3 ? "option active" : "option"}>Bán chạy</div>
            </div>
            <PaginatedProducts items={renderSwitch(sortOption)} itemsPerPage={15} />
         </div>
      </section>
   )
}

export default CategoryDetail