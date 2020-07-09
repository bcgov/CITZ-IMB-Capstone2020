import React from "react";

//Placeholder page to store cookie functions
function CookieStore() {

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

}
  export default CookieStore;
  