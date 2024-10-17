const http = require('http');
const { IncomingForm } = require('formidable');
const { existsSync, mkdirSync, readFile, rename } = require('fs');
const path = require('path');

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!existsSync(uploadsDir)){
    mkdirSync(uploadsDir);
}

http.createServer((req, res) => {
  if (req.url === '/') {
    // Serve the index.html file
    readFile('./index.html', (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        return res.end('Error loading index.html');
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  } else if (req.url === '/upload') {
    // Serve the upload.html file
    readFile('./upload.html', (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        return res.end('Error loading upload.html');
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  } else if (req.url === '/fileupload') {
    const form = new IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) {
        comsole.error(err);
        res.writeHead(400, {'Content-Type': 'text/plain'});
        return res.end('Error parsing the file upload.');
      }


      const uploadedFile = files.filetoupload[0];

      if (!uploadedFile || !uploadedFile.filepath) {
          console.error('Uploaded file not found or has no path.');
          res.writeHead(400, { 'Content-Type': 'text/plain' });
          return res.end('Uploaded file not found.');
      }
  
      const oldpath = uploadedFile.filepath;
      const newpath = path.join(uploadsDir, uploadedFile.originalFilename);

      rename(oldpath, newpath, (err) => {
        if (err) {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          return res.end('Error moving the file.');
        }
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('File uploaded and moved!');
      });
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
  }
}).listen(8080, () => {
  console.log('Server listening on http://127.0.0.1:8080');
});

// 