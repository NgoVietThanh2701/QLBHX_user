import React, { useState, useEffect } from 'react';
import './ListProducts.scss'
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';


const Products = ({ products }) => {
   return (
      <>
         <div className="products">
            {products && products.map((product, index) => {
               return (
                  <Link to={product.uuid}>
                     <div className="items" key={index}>
                        <div className="item">
                           <div className="image">
                              <img src={product.url} alt="" />
                           </div>
                           <div className='name'>{product.description}</div>
                           <div className="sale">Giảm 10đ</div>
                           <div className="list-price">
                              <span className="price-del"><del>{product.price}</del></span>
                              <span className="price">{parseInt(product.price) - parseInt(product.price) * parseInt(product.discount) / 100} </span>
                           </div>
                           <div className="list-price">
                              <Rating className='star' name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                              <span className="count-sell">Đã bán 5.4k</span>
                           </div>
                        </div>
                        {product.discount > 0 && <div className="discount">
                           <div className="dis">{product.discount}%</div>
                           <div className="text">giảm</div>
                           <div className="triangle"></div>
                        </div>
                        }
                     </div>
                  </Link>
               )
            })}
         </div>
      </>
   )
}


function PaginatedProducts({ items, itemsPerPage }) {
   // We start with an empty list of items.
   const [currentItems, setCurrentItems] = useState(null);
   const [pageCount, setPageCount] = useState(0);
   // Here we use item offsets; we could also use page offsets
   // following the API or data you're working with.
   const [itemOffset, setItemOffset] = useState(0);

   useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
   }, [itemOffset, items, itemsPerPage]);

   // Invoke when user click to request another page.
   const handlePageClick = (event) => {
      const newOffset = event.selected * itemsPerPage % items.length;
      console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
      setItemOffset(newOffset);
   };

   return (
      <>
         <Products products={currentItems} />
         <ReactPaginate className='paging'
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
         />
      </>
   );
}

export default PaginatedProducts