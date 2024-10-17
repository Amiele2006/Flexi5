# Node JS Learning

This is a repository that has my learnings of node js and npm.

## Things to learn about Node JS
 - Node js is a free open source server environment.
 - It runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.) and  uses JavaScript on the server.
 - Node.js runs single-threaded.
 - It is non-blocking, asynchronous programming, which is very memory efficient.

## What Can NodeJS Do?
 - Node.js can generate dynamic page content.
 - Node.js can create, open, read, write, delete, and close files on the server.
 - Node.js can collect form data.
 - Node.js can add, delete, modify data in your database.

## How To Get Started With NodeJS ?
 - Download Node JS
 - Create a Nodejs file and write :
  ```javascript
  var http = require('http');
  http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
  ```

 - After saving the file, initiate the file by using `node myfirst.js` in your terminal.

## What I created

- I created a file uploading system using NodeJS. I learnt a lot from W3Schools and used ChatGpt and `console.log` to help with my errors.
- To use this, fork this repository then clone it using github desktop.
- You can then run this on your laptop using `node app.js`