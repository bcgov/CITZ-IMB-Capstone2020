/*
 * @Author: Josh Dueck
 * @Date: 2020-06-09 10:15:15
 * @LastEditTime: 2020-07-21 14:15:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \OPReactViaGit\src\FavoriteNews.js
 */ 

import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import PaginationFav from './PaginationFav.js';

const FavoriteNews = ({deleted, showText, theme}) => {
  const [cookieStore, setCookieStore] = useState(stringToArray(listCookies()));
  // eslint-disable-next-line
  const [index, setIndex] = useState(0);
  //const [key, setKey] = useState(cookieStore[index]);
  const [key, setKey] = useState('postKeys=' + cookieStore[index] + '&');
  //const [url, setUrl] = useState(`https://news.api.gov.bc.ca/api/Posts/${key}?api-version=1.0`);
  const [url, setUrl] = useState(`https://news.api.gov.bc.ca/api/Posts?${key}api-version=1.0`);
  //https://news.api.gov.bc.ca/api/Posts?postKeys=2020AG0048-001277&postKeys=2020AGRI0041-001275&api-version=1.0
  const [data, setData] = useState([]);
  //current key for remove
  const [cookie, setCookie] = useState(``);

  //below for pagenation
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  console.log(theme);

  // Fetches object from API and stores it in the data variable
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data);

    };

    fetchData();
  }, [url]);

  // When a user click the "Next Story" button, fetches the next story
  useEffect(() => {
    function wholeCookie(){
      //whole key in one line for replacement
      var wholeCookie = '';
      for (var i = 0 ; i <= cookieStore.length; i++) {
        //aString += theCookies[i-1].split("=")[0] + "\n";
        wholeCookie += 'postKeys=' + cookieStore[i] + '&';
      }
      console.log(wholeCookie);
      return wholeCookie;
    }
    
    const updateIndex = async () => {
      // setKey(cookieStore[index]);
      // setUrl(`https://news.api.gov.bc.ca/api/Posts/${key}?api-version=1.0`); 
      setKey(wholeCookie());
      //setKey('postKeys=' + cookieStore[index] + '&');
      setUrl(`https://news.api.gov.bc.ca/api/Posts?${key}api-version=1.0`); 
    };

    updateIndex();
  }, [index, cookieStore, key]);

  // when a user clicks the pin, it will un-tag the story and remove the cookie
  useEffect(() => {
    const removeCookie = async () => {
      Cookies.remove(cookie);
    };

    removeCookie();
    setCookieStore(stringToArray(listCookies()));
  }, [cookie, deleted]);

  // Turning cookies into a string of key values separated by spaces and new lines
  function listCookies() {
      var theCookies = document.cookie.split(';');
      var aString = '';
      for (var i = 1 ; i <= theCookies.length; i++) {
          //aString += theCookies[i-1].split("=")[0] + "\n";
          aString += theCookies[i-1].split("=")[0] + "&";
      }

      return aString;
      }

      // takes a string of cookies and returns an array of strings with the name of each cookie
      function stringToArray(aString) {
          var cookieArray = [];
          // while (aString.length > 1) {
          //   if (aString.charAt(0) === ' ' || aString.charAt(0) === '\n') {
          //       aString = aString.substr(1);
          //   }
          //   cookieArray.push(aString.split('\n')[0]);
          //   aString = aString.slice(aString.split('\n')[0].length);
          // }
          while (aString.length > 1) {
            if (aString.charAt(0) === ' ' || aString.charAt(0) === '&') {
                aString = aString.substr(1);
            }
            if (aString.charAt(0) === ' ' || aString.charAt(0) === '&') {
              aString = aString.substr(1);
            }
            cookieArray.push(aString.split('&')[0]);
            aString = aString.slice(aString.split('&')[0].length);
          }

          return cookieArray;
      }

  //below for pagenation
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  

  // If there are no tagged stories
  if (data.length === 0) {
    return (
      <div className="container mt-5">
        <h3>No Favorites</h3>
      </div>
    );
  }
  // If user has tagged stories
  else {
    return (
      <div className="container mt-5">

        <h3 style={{textAlign: 'center'}}>Favorite News</h3>
        <br/>

        <ul>
          {currentPosts.map(item =>  (
            <li key={item.atomId}>
              {item.documents.map((documents, index) => <h4 key = {index}>{documents.headline} 
              </h4>)}
              <b> news type:</b>  {item.kind} <br/>
              <b> news key:</b>  {item.key} <input type="image" src={require(`../includes/garbage-can-${theme}.svg`)} alt="pin" height="30" width="30" onClick={ () => setCookie(`${item.key}`)} /><br/>
              
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
        <PaginationFav
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
        />

      </div>
    );
  }
}

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
      }}
  />
);

export default FavoriteNews;

