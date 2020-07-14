/*
 * @Author: your name
 * @Date: 2020-07-14 12:52:53
 * @LastEditTime: 2020-07-14 12:56:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CITZ-IMB-Capstone2020\src\views\PaginationFav.js
 */ 
import React from "react";

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