<!--
 * @Author: your name
 * @Date: 2020-07-27 22:48:48
 * @LastEditTime: 2020-07-29 19:14:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \undefinedc:\Users\Mark\Desktop\BUILD\BUILD.md
--> 
# Install the Capstone2020 Starter-kit in your local environment

# Introduction

In this tutorial, I'll show you how to clone the Capstone2020 starter-kit into your app repository and how to run it locally.

# Tutorial

1. Open [Git Bash](https://gitforwindows.org/) or Windows Command Prompt

2. To clone the starter-kit, run the following command in terminal:

    ```sh
    $ git clone https://github.com/bcgov/CITZ-IMB-Capstone2020.git
    ```

    **Click [here](./output.txt) to view a file hierarchy tree.**

3. Navigate to your solution root folder (the folder which has the package.json file), run the following command in terminal:

    ```sh
    $ cd CITZ-IMB-Capstone2020/
    ```

4. To install all necessary packages needed to run the start-kit, issue the following command under the root folder of your solution app:

   ```sh
   $ npm install
   ```

5. After all the packages have been installed, run the following command in terminal to start your solution app:

    ```sh
   $ npm start
   ```
## Summary
```sh
$ git clone https://github.com/bcgov/CITZ-IMB-Capstone2020.git
$ cd CITZ-IMB-Capstone2020/
$ npm install
$ npm start
```
