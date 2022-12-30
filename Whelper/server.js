const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'project/build')));

app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/project/build/index.html'));
});

app.listen(8080, function () {
  console.log('listening on 8080');
});