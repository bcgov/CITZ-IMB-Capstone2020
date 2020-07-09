/*
 * @Author: Murphy316
 * @Date: 2020-06-09 10:15:15
 * @LastEditTime: 2020-06-30 14:04:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \OPReactViaGit\src\FetchLatestNews.js  
 */ 

import React, { useEffect, useState } from "react";
import axios from "axios";
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AntSwitch from './AntSwitch.js';
import Pagination from './Pagination.js';
import Cookies from 'js-cookie';

const FetchLatestNews = () => {
  var [data, setData] = useState([]);
  const [query, setQuery] = useState("releases");
  const [showText, setShowText] = useState(false);
  const [state, setState] = React.useState({checkedC: false,});
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [url, setUrl] = useState(API_KEY);
  const [cookie, setCookie] = useState(``);


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setShowText(!showText)
  };

  //??G
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const result = await axios.get(url);
      setData(result.data);
      setLoading(false);
    };

    fetchPosts();
  }, [url]);

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
     <input
       type="text"
       value={query}
       onChange={event => setQuery(event.target.value)}
     />
     <button
       type="button"
       onClick={() =>
         setUrl(`https://news.api.gov.bc.ca/api/Posts/Latest/home/default?postKind=${query}&count=50&skip=0&api-version=1.0`)
       }
     >
       Search
     </button>
     <p>Search category: releases, stories, factsheets, updates or default</p>

     <FormGroup>
             <Typography component="div">
               <Grid component="label" container alignItems="center" spacing={1}>
                 <Grid item>content display options: </Grid>
                 <Grid item>Hide</Grid>
                 <Grid item>
                   <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
                 </Grid>
                 <Grid item>Show</Grid>
               </Grid>
             </Typography>
     </FormGroup>

     <ul>
       {currentPosts.map(item =>  (
         <li key={item.atomId}>
           {item.documents.map((documents, index) => <h4 key = {index}>{documents.headline} 
            <input type="image" src={require("../includes/security-pin.svg")} alt="pin" height="20" width="20" onClick={ () => setCookie(`${item.key}`)} />
           </h4>)}
           <b> news type:</b>  {item.kind} <br/>
           <b> news key:</b>  {item.key} <br/>
           
           {/*//reverse ASCII code from api ..*/} 
           {showText && item.documents.map((documents, index) => <p key = {index}>{documents.detailsHtml = documents.detailsHtml.replace(/(<([^>]+)>)/ig, '')
                                                                                                                                            .replace(/&rsquo;/ig, '\'')
                                                                                                                                            .replace(/(&ldquo;)|(&rdquo;)/g, '"')
                                                                                                                                            .replace(/&ndash;/ig, ' - ')
                                                                                                                                            .replace(/&lsquo;/, '\'')
                                                                                                                                            .replace(/&nbsp;/ig, ' ')
                                                                                                                                            }</p>)}
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

export default FetchLatestNews;
