'use strict';

const express = require('express');
let id = 0;
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/hello', (req, res) => {
  res.send('Hello Ali! If you see this means frontend is running! Do /instructor/1 or /student/1 for more :)\n');
});

var request = require('request');

app.get('/instructor/:id', (req, res) => {
  id = Number(req.params.id)
  let name = ""
  request(String(`http://backend:8080/instructor/${id}`), function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var obj = JSON.parse(body);
      name = "Hello "+obj.firstName + " " + obj.lastName + " , from Backend. Thank You for being a great DevOps Teacher!
      res.send(name);
    }
  })

});

app.get('/student/:id', (req, res) => {
  id = Number(req.params.id)
  let name = ""
  request(String(`http://backend:8080/student/${id}`), function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var obj = JSON.parse(body);
      if (id == 1) {
        name = "Hello "+obj.firstName + " " + obj.lastName + ", your project is looking awesome!"
      }
      
      res.send(name);
    }
  })

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
