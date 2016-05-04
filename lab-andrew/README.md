![cf](https://i.imgur.com/7v5ASc8.png) lab-03-fs-async
======

[![Stories in Ready](https://badge.waffle.io/codefellows/seattle-javascript-401n1.svg?label=ready&title=Ready)](http://waffle.io/codefellows/seattle-javascript-401n1) [![Build Status](https://travis-ci.org/codefellows-seattle-javascript-401n1/lab-03-fs-async.svg?branch=master)](https://travis-ci.org/codefellows-seattle-javascript-401n1/lab-03-fs-async)

## To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Description:
* For this assignment you will need to read three files and console log the first 8 bytes in hex of each file.  
* Also, you must guarantee that three files are read and console logged in the order `'one.txt', 'two.txt', 'three.txt'` regardless of file size. 
* You can use any method of handling async except nested callback. aka. dont use nested calls to `fs.readFile` with anynomus function callbacks
* You will need to write tests that gaurantee that the files are logged in order.
* You will also need to look up and implement async testing, making sure that you are not getting "false positives"(tests that are passing but shouldn't be). 
 
##Rubric:
  * Async Handling: 4pts
  * Use of fs: 2pts
  * Testing: 4pts
