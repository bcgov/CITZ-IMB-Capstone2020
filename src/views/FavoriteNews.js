/*
 * @Author: your name
 * @Date: 2020-06-09 10:15:15
 * @LastEditTime: 2020-06-14 20:06:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \OPReactViaGit\src\FavoriteNews.js
 */ 

import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
// import { withStyles } from '@material-ui/core/styles';
// import FormGroup from '@material-ui/core/FormGroup';
// import Switch from '@material-ui/core/Switch';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import AntSwitch from './AntSwitch.js';
 

export default function FetchLatestNews() {

const [cookieStore, setCookieStore] = useState(stringToArray(listCookies()));
const [index, setIndex] = useState(0);
const [key, setKey] = useState(cookieStore[index]);

const [url, setUrl] = useState(`https://news.api.gov.bc.ca/api/Posts/${key}?api-version=1.0`);

const [data, setData] = useState([]);
const [cookie, setCookie] = useState(``);

//  const [showText, setShowText] = useState(false);
//  const [state, setState] = React.useState({
//    checkedC: false,
//  });
//  const handleChange = (event) => {
//    setState({ ...state, [event.target.name]: event.target.checked });
//    setShowText(!showText)
//  };


 //??G
 useEffect(() => {
   const fetchData = async () => {
     const result = await axios(url);
     setData(result.data);

   };

   fetchData();
 }, [url]);

 
 useEffect(() => {
  const updateIndex = async () => {
    setKey(cookieStore[index]);
    setUrl(`https://news.api.gov.bc.ca/api/Posts/${key}?api-version=1.0`); 

  };

  updateIndex();
}, [index, cookieStore, key  ]);



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

    console.log(data.length);
    console.log(typeof data);
    console.log(data);

if (data.length === 0) {
  return (
    <p>Loading...</p>
  );
}
else {
 return (
   <div class="container mt-5">
     <br/>

     <ul>
       <li>

        {data.documents.map(document => <h4 key={document.key}> {document.headline}
        <input type="image" src={require("../includes/security-pin.svg")} alt="pin" height="20" width="20" onClick={ () => setCookie(`${data.key}`)} />
        </h4>)}
       </li>
    </ul>



     {/* <ul> {data.documents.map(document => <h4 key={document.key}> {document.headline} </h4>)}
       {data.map(item =>  (
         <li key={item.atomId}>
           {item.documents.map(documents => <h4 key = {documents.languageId}>{documents.headline} </h4>)}
           <b> news type:</b>  {item.kind} <br/>
           <b> news key:</b>  {item.key} <br/>
           
           <FormGroup>
             <Typography component="div">
               <Grid component="label" container alignItems="center" spacing={1}>
                 <Grid item>Hide</Grid>
                 <Grid item>
                   <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
                 </Grid>
                 <Grid item>Show</Grid>
               </Grid>
             </Typography>
           </FormGroup>

           {showText && item.documents.map(documents => <p key = {documents.languageId}>{documents.detailsHtml = documents.detailsHtml.replace(/(<([^>]+)>)/ig, '')
                                                                                                                                            .replace(/&rsquo;/ig, '\'')
                                                                                                                                            .replace(/(&ldquo;)|(&rdquo;)/g, '"')
                                                                                                                                            .replace(/&ndash;/ig, ' - ')
                                                                                                                                            .replace(/&lsquo;/, '\'')
                                                                                                                                            .replace(/&nbsp;/ig, ' ')
                                                                                                                                            }</p>)}
         </li> 
       ))}
     </ul> */}
     
     <button type="button" onClick={ () => setIndex((index+1) % cookieStore.length)}> Next Story </button>
   </div>
 );
    }
}
