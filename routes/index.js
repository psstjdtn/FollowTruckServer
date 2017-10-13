var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FollowTruckServer' });
});


router.post('/user/login', function(req,res){
	var id = req.body.id;
	var password = req.body.password;
	res.send(JSON.stringify({id:id,password:password}));
});

router.post('/user', function(req,res){
	var id = req.body.id;
	var password = req.body.password;
	res.send(JSON.stringify({id:id,password:password}));
});

router.get('/user', function(req,res){ //쿼리에서 꺼내온다
	var rowid = req.query.rowid;
	res.send(JSON.stringify({rowid:rowid}));
});

router.put('/user', function(req,res){
	var rowid = req.query.rowid;
	var id = req.body.id;
	var password = req.body.password;
	res.send(JSON.stringify({rowid:rowid,id:id,password:password}));
});

router.delete('/user', function(req,res){
	var rowid = req.query.rowid;
	res.send(JSON.stringify({rowid:rowid}));
});

router.get('/user/list', function(req,res){
	res.send(JSON.stringify([])); // list이기 때문에 배열로 전달
});



module.exports = router;
