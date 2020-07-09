/*
 * @Author: Josh Dueck
 * @Date: 2020-06-09 10:15:15
 * @LastEditTime: 2020-06-14 20:06:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \OPReactViaGit\src\FavoriteNews.js
 */ 

import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
 

const FavoriteNews = () => {

const [cookieStore, setCookieStore] = useState(stringToArray(listCookies()));
const [index, setIndex] = useState(0);
const [key, setKey] = useState(cookieStore[index]);
const [url, setUrl] = useState(`https://news.api.gov.bc.ca/api/Posts/${key}?api-version=1.0`);
const [data, setData] = useState([]);
const [cookie, setCookie] = useState(``);


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
  const updateIndex = async () => {
    setKey(cookieStore[index]);
    setUrl(`https://news.api.gov.bc.ca/api/Posts/${key}?api-version=1.0`); 

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
}, [cookie]);

// Turning cookies into a string of key values separated by spaces and new lines
 function listCookies() {
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 1 ; i <= theCookies.length; i++) {
        aString += theCookies[i-1].split("=")[0] + "\n";
    }

    return aString;
    }

    // takes a string of cookies and returns an array of strings with the name of each cookie
    function stringToArray(aString) {
        var cookieArray = [];
        while (aString.length > 1) {
            if (aString.charAt(0) === ' ' || aString.charAt(0) === '\n') {
                aString = aString.substr(1);
            }
            if (aString.charAt(0) === ' ' || aString.charAt(0) === '\n') {
                aString = aString.substr(1);
            }
            cookieArray.push(aString.split('\n')[0]);
            aString = aString.slice(aString.split('\n')[0].length);
        }

        return cookieArray;
    }

// If there are no tagged stories
if (data.length === 0) {
  return (
    <div className="container mt-5">
      <h1>You have no tagged stories!</h1>
    </div>
  );
}
// If user has tagged stories
else {
 return (
   <div className="container mt-5">

     <h1 style={{textAlign: 'center'}}>Favorite News</h1>
     <br/>

        {data.documents.map((document, index) => <h4 key={index}> {document.headline} &ensp;
        <input type="image" src={require("../includes/garbage-can-delete.svg")} alt="pin" height="30" width="30" onClick={ () => setCookie(`${data.key}`)} />
        </h4>)}
        
        {data.documents.map((document, index) => <p key = {index}>{document.detailsHtml = document.detailsHtml.replace(/(<([^>]+)>)/ig, '')
                                                                                                                                            .replace(/&rsquo;/ig, '\'')
                                                                                                                                            .replace(/(&ldquo;)|(&rdquo;)/g, '"')
                                                                                                                                            .replace(/&ndash;/ig, ' - ')
                                                                                                                                            .replace(/&lsquo;/, '\'')
                                                                                                                                            .replace(/&nbsp;/ig, ' ')
                                                                                                                                            }</p>)}

     
     <button type="button" onClick={ () => setIndex((index+1) % cookieStore.length)}> Next Story </button>
   </div>
 );
}
}

export default FavoriteNews;