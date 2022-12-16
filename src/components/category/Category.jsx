import React from 'react'
import CategoryCard from './CategoryCard'
import './Category.scss'

const Category = () => {
   return (
      <>
         <section className='category'>
            <div className="title">DANH MỤC</div>
            <CategoryCard />
         </section>
      </>
   )
}

export default Category