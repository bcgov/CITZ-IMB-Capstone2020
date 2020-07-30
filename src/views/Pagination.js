/*
 * @Author: your name
 * @Date: 2020-06-29 21:37:25
 * @LastEditTime: 2020-07-29 19:54:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CITZ-IMB-Capstone2020 - xordpe-dev\src\views\Pagination.js
 */ 
import React from "react";

//used for latest news page
//calculate how many pages do we have based on postsPerPage, and totalPosts
//onclick() function used for navigating different pages
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} id='Pagination'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;