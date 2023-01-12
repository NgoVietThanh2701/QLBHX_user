import React from 'react'
import CategoryCard from './CategoryCard'
import './Category.scss'

const Category = ({ category }) => {
   return (
      <>
         <section className='category'>
            <div className="title">DANH MỤC</div>
            <CategoryCard category={category} />
         </section>
      </>
   )
}

export default Category