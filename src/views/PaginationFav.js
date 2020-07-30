/*
 * @Author: your name
 * @Date: 2020-07-14 12:52:53
 * @LastEditTime: 2020-07-29 19:55:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CITZ-IMB-Capstone2020\src\views\PaginationFav.js
 */ 
import React from "react";

//used for Favorite news page
//calculate how many pages do we have based on postsPerPage, and totalPosts
//onclick() function used for navigating different pages
const PaginationFav = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} id='Pagination'>
            <a onClick={() => paginate(number)} href='/favorites/#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationFav;