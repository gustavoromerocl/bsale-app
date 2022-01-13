var express = require('express');
var router = express.Router();
var connection = require('../config/database');

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM `product` ', function(err, results, fields) {
    if (err) throw err;
    console.log('Table product: ', results);
    res.json(results);
  });
  //res.render('index', { title: 'Express' });
});

module.exports = router;
