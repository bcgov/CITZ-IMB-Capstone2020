/*
 * @Author: your name
 * @Date: 2020-06-09 10:15:15
 * @LastEditTime: 2020-06-14 20:06:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \OPReactViaGit\src\FetchLatestNews.js
 */ 

import React, { useEffect, useState } from "react";
import axios from "axios";
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function FetchLatestNews2() {

const [cookieStore, setCookieStore] = useState(stringToArray(listCookies()));
const [index, setIndex] = useState(0);
const [key, setKey] = useState(cookieStore[index]);

const [url, setUrl] = useState(`https://news.api.gov.bc.ca/api/Posts/${key}?api-version=1.0`);

 var [data, setData] = useState([]);
 const [showText, setShowText] = useState(false);
 const [state, setState] = React.useState({
   checkedC: false,
 });
 const handleChange = (event) => {
   setState({ ...state, [event.target.name]: event.target.checked });
   setShowText(!showText)
 };


 //??G
 useEffect(() => {
   const fetchData = async () => {
     const result = await axios(url);
     setData(result.data);
     
   };

   fetchData();
 }, [url]);

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

 return (
   <div class="container mt-5">
     <br/>
     
     <p>{data.key}</p>

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
     
     <button
         type="button"
         onClick={() => {
           setIndex((index+1) % cookieStore.length);
           setKey(cookieStore[index]);
           setUrl(`https://news.api.gov.bc.ca/api/Posts/${key}?api-version=1.0`); 
          //console.log(index);
          //console.log(cookieStore[index]);
            //console.log(url);

         }
         }
       >
         Next Story
     </button>
   </div>
 );
}

const AntSwitch = withStyles((theme) => ({
 root: {
   width: 28,
   height: 16,
   padding: 0,
   display: 'flex',
 },
 switchBase: {
   padding: 2,
   color: theme.palette.grey[500],
   '&$checked': {
     transform: 'translateX(12px)',
     color: theme.palette.common.white,
     '& + $track': {
       opacity: 1,
       backgroundColor: theme.palette.primary.main,
       borderColor: theme.palette.primary.main,
     },
   },
 },
 thumb: {
   width: 12,
   height: 12,
   boxShadow: 'none',
 },
 track: {
   border: `1px solid ${theme.palette.grey[500]}`,
   borderRadius: 16 / 2,
   opacity: 1,
   backgroundColor: theme.palette.common.white,
 },
 checked: {},
}))(Switch);