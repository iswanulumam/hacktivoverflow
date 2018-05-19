const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, function (err) {
  if (err) return console.log('failed connect to db');
  console.log('<3 i love coding <3');
  console.log(process.env.MONGODB_URI);
});

module.exports = { mongoose };