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



## What I Created

I built a simple yet efficient file uploading system using Node.js. This project was a great learning experience for me, as I picked up valuable knowledge from various resources like W3Schools, along with a lot of trial and error. ChatGPT and `console.log` became my go-to tools for debugging and resolving errors during the development process.

### How to Use

If you'd like to use this file upload system on your local machine, follow these steps:

1. **Fork the Repository**: Start by forking this repository to create your own version. This will allow you to make changes and experiment without affecting the original project.
   
2. **Clone the Repository**: After forking, clone the repository using GitHub Desktop or via terminal with the following command:
   
   ```bash
   git clone https://github.com/your-username/repo-name.git
   ```

3. **Install Dependencies**: Navigate into the project directory and install the necessary dependencies with:
   
   ```bash
   npm install
   ```

4. **Run the Application**: To run the system on your local machine, use the following command:

   ```bash
   node app.js
   ```

5. **Upload Files**: Once the app is running, you can upload files through the interface by visiting the specified port on your browser (e.g., `http://localhost:3000`).

