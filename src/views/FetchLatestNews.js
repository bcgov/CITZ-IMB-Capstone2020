/*
 * @Author: Murphy316
 * @Date: 2020-06-09 10:15:15
 * @LastEditTime: 2020-07-21 14:15:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \OPReactViaGit\src\FetchLatestNews.js  
 */ 

import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from './Pagination.js';
import Cookies from 'js-cookie';

const FetchLatestNews = ({showText, newsType, theme}) => {
  var [data, setData] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const [url, setUrl] = useState(API_KEY);
  const [cookie, setCookie] = useState(``);

  // Getter for the news articles. API fetch
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const result = await axios.get(url);
      setData(result.data);
      setLoading(false);
    };

    setUrl(`https://news.api.gov.bc.ca/api/Posts/Latest/home/default?postKind=${newsType}&count=50&skip=0&api-version=1.0`);
    fetchPosts();
  }, [url,newsType]);

  // adding the Key of a news article to the list of cookies
  useEffect(() => {
    const storeCookie = async () => {
      Cookies.set(cookie, cookie, { expires: 100});
    };

    storeCookie();
  }, [cookie]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <React.Fragment>
     <h3 style={{textAlign: 'center'}}>Latest News</h3>

     <ul>
       {/* currentPosts is an array of news articles. Each individual news article is mapped to 'item'. */}
       {currentPosts.map(item =>  (
         <li key={item.atomId}>
           {item.documents.map((documents, index) => <h4 key = {index}>{documents.headline} </h4>)}
           <b> News Type:</b>  {item.kind} <br/>
           <b> News Key:</b>  {item.key} <input type="image" src={require(`../includes/pin-icon-${theme}.svg`)} alt="pin" height="20" width="20" onClick={ () => setCookie(`${item.key}`)} /><br/>
           
           {/* When showText is true, displays news article body and replaces special characters with readable ones. Showtext toggle is in Header.js dropdown */} 
           {showText && item.documents.map((documents, index) => <p key = {index}>{documents.detailsHtml = documents.detailsHtml.replace(/(<([^>]+)>)/ig, '')
                                                                                                                                            .replace(/&rsquo;/ig, '\'')
                                                                                                                                            .replace(/(&ldquo;)|(&rdquo;)/g, '"')
                                                                                                                                            .replace(/&ndash;/ig, ' - ')
                                                                                                                                            .replace(/&lsquo;/, '\'')
                                                                                                                                            .replace(/&nbsp;/ig, ' ')
                                                                                                                                            }</p>)}
        <ColoredLine color="Lavender" />
         </li> 
       ))}
     </ul>
     </React.Fragment>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
    </div>


  );
};

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
      }}
  />
);

export default FetchLatestNews;
