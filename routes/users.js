var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createPool({
	host:'localhost',
	port:'3306',
	user:'root',
	password:'',
	database:'baidunews'
});
/* 后台管理页面 */

// 获取所有新闻列表
router.get('/getnews', function(req, res, next) {
	connection.query('SELECT * FROM `news` WHERE `status` = 1',function(err,rows,fields){
		res.json(rows);
	});
});
//点击确认修改按钮
router.post('/update',function(req, res, next){
	var newsid = req.body.id,
		newstype = req.body.newstype,
		newstitle = req.body.newstitle,
		newsimg = req.body.newsimg,
		newssrc = req.body.newssrc,
		newstime = req.body.newstime;
	connection.query('UPDATE `news` SET `newstitle` = ?,`newstype` = ?,`newsimg` = ?,`newstime` = ?,`newssrc` = ? WHERE `id` = ?',[newstitle,newstype,newsimg,newstime,newssrc,newsid],function(err,rows){
		res.json(rows);
	});
});
//模态框取值
router.get('/curnews',function(req,res){
	var newsid = req.query.newsid;
	connection.query('SELECT * FROM `news` WHERE `id` = ?',[newsid],function(err,rows){
		res.json(rows);
	});
});
//删除新闻
router.post('/delete',function(req,res){
	var newsid = req.body.newsid;
	connection.query('UPDATE `news` SET `status` = 0 WHERE `id` = ?',[newsid],function(err,rows){
		res.json(rows);
	});
});
//新增新闻
router.post('/insert',function(req,res){
	var newstype = req.body.newstype,
		newstitle = req.body.newstitle,
		newsimg = req.body.newsimg,
		newssrc = req.body.newssrc,
		newstime = req.body.newstime;
	connection.query('INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES (?,?,?,?,?)',[newstitle,newstype,newsimg,newstime,newssrc],function(err,rows){
		res.json(rows);
	});
});
module.exports = router;
