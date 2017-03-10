var express = require('express');
var router = express.Router();
var mysql = require('mysql');
/* 在主页获取新闻时的请求 */
router.get('/', function(req, res, next) {
	var newstype = req.query.newstype;

	// 建立数据库连接
	var connection = mysql.createConnection({
		host:'localhost',
		port:'3306',
		user:'root',
		password:'',
		database:'baidunews'
	});

	connection.connect();

	connection.query('SELECT * FROM `news` WHERE `newstype` = ? AND `status` = 1',[newstype],function(err,rows,fields){
		res.json(rows);
	});
});

module.exports = router;
