var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  user     : 'bsale_test',
  password : 'bsale_test',
  database: 'bsale_test',
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM `product` ', function(err, results, fields) {
  if (err) throw err;
  console.log('Table product: ', results);
});

connection.query('SELECT * FROM `category` ', function(err, results, fields) {
  if (err) throw err;
  console.log('Table Category: ', results);
});


connection.end();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
