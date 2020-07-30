/*
 * @Author: your name
 * @Date: 2020-07-07 15:14:33
 * @LastEditTime: 2020-07-29 19:52:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CITZ-IMB-Capstone2020\src\views\GlobalStyles.js
 */ 

 //add .
import { createGlobalStyle} from "styled-components"

//a styled component for calling in App.js, used for wrap background theme.
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `