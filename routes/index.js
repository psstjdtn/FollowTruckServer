var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FollowTruckServer' });
});

/* API 예제 */
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


/* 
 API명세서(2017.10.13)에 따른 API리스트  (1 ~ 22)
*/

/*	1	로그인	GET	/com/login	id, password	SELECT	COM	회원정보	*/
router.get('/com/login', function(req,res){ 
	var id = req.query.id;
	var password = req.body.password;

	res.send(JSON.stringify({id:id, password:password}));
});

/*	2	회원가입	POST	/com	id, password, hpno, snsid	INSERT	COM	회원정보	*/
router.post('/com', function(req,res){
	var id = req.body.id;
	var password = req.body.password;
	var hpno = req.body.hpno;
	var snsid = req.body.snsid;

	res.send(JSON.stringify({id:id,password:password,hpno:hpno,snsid:snsid}));
});

/*	3	회원정보변경	PUT	/com	rowid, password, hpno, snsid	UPDATE	COM	회원정보	*/
router.put('/com', function(req,res){
	var rowid = req.query.rowid;
	var password = req.body.password;
	var hpno = req.body.hpno;
	var snsid = req.body.snsid;
	
	res.send(JSON.stringify({rowid:rowid,id:id,password:password,hpno:hpno,snsid:snsid}));
});

/*	4	회원정보삭제	DELETE	/com	rowid	DELETE	COM	회원정보	*/
router.delete('/com', function(req,res){
	var rowid = req.query.rowid;
	res.send(JSON.stringify({rowid:rowid}));
});

/*	5	게시판조회	GET	/board/list	business_number	SELECT	COM	게시판정보	*/
router.get('/board/list', function(req,res){
	var business_number = req.body.business_number;
	
	res.send(JSON.stringify({business_number:business_number}));
	res.send(JSON.stringify([]));
});

/*	6	게시판댓글달기	POST	/board	business_number, customer_number, writetime, content	INSERT	COM	게시판정보	*/
router.post('/board', function(req,res){
	var business_number = req.body.business_number;
	var customer_number = req.body.customer_number;
	var writetime = req.body.writetime;
	var content = req.body.content;

	res.send(JSON.stringify({business_number:business_number,customer_number:customer_number,writetime:writetime,content:content}));
});

/*	7	게시판댓글수정	PUT	/board	rowid, writetime, content	UPDATE	COM	게시판정보	*/
router.put('/board', function(req,res){
	var rowid = req.query.rowid;
	var writetime = req.body.writetime;
	var content = req.body.content;
	
	res.send(JSON.stringify({rowid:rowid,writetime:writetime,content:content}));
});


/*	8	게시판댓글삭제	DELETE	/board	rowid	DELETE	COM	게시판정보	*/
router.delete('/board', function(req,res){
	var rowid = req.query.rowid;
	res.send(JSON.stringify({rowid:rowid}));
});


/*	9	메뉴조회	GET	/menu/list	business_number	SELECT	BIZ	메뉴정보	*/
router.get('/menu/list', function(req,res){
	var business_number = req.body.business_number;
	
	res.send(JSON.stringify({business_number:business_number}));
	res.send(JSON.stringify([]));
});


/*	10	메뉴등록	POST	/menu	business_number, imgurl, name, price	INSERT	BIZ	메뉴정보	*/
router.post('/menu', function(req,res){
	var business_number = req.body.business_number;
	var imgurl = req.body.imgurl;
	var name = req.body.name;
	var price = req.body.price;

	res.send(JSON.stringify({business_number:business_number,imgurl:imgurl,name:name,price:price}));
});


/*	11	메뉴변경	PUT	/menu	rowid, imgurl, name, price	UPDATE	BIZ	메뉴정보	*/
router.put('/menu', function(req,res){
	var rowid = req.query.rowid;
	var imgurl = req.body.imgurl;
	var name = req.body.name;
	var price = req.body.price;
	
	res.send(JSON.stringify({rowid:rowid,imgurl:imgurl,name:name,price:price}));
});


/*	12	메뉴삭제	DELETE	/menu	rowid	DELETE	BIZ	메뉴정보	*/
router.delete('/menu', function(req,res){
	var rowid = req.query.rowid;
	res.send(JSON.stringify({rowid:rowid}));
});


/*	13	영업장등록	POST	/com/biz	business_number, name, context	INSERT	BIZ	영업장정보	*/
router.post('/com/biz', function(req,res){
	var business_number = req.body.business_number;
	var name = req.body.name;
	var context = req.body.context;

	res.send(JSON.stringify({business_number:business_number,name:name,context:context}));
});


/*	14	영업장삭제	DELETE	/com/biz	business_number	DELETE	BIZ	영업장정보	*/
router.delete('/com/biz', function(req,res){
	var business_number = req.query.business_number;
	res.send(JSON.stringify({business_number:business_number}));
});


/*	15	영업시작및종료	PUT	/com/biz/	business_number, gps 	UPDATE	BIZ	영업장정보	*/
router.put('/com/biz', function(req,res){
	var business_number = req.query.business_number;
	var gps = req.body.gps;
	
	res.send(JSON.stringify({business_number:business_number,gps:gps}));
});


/*	16	점포주문내역조회	GET	/order/biz/list	business_number, date	SELECT	BIZ	주문내역	*/
router.get('/order/biz/list', function(req,res){
	var business_number = req.body.business_number;
	var date = req.body.date;

	res.send(JSON.stringify({business_number:business_number, date:date}));
	res.send(JSON.stringify([]));
});

/*	17	점포주문확인	PUT	/order/biz	rowid	UPDATE	BIZ	주문내역	*/
router.put('/order/biz', function(req,res){
	var rowid = req.query.rowid;
	
	res.send(JSON.stringify({rowid:rowid}));
});

/*	18	점포조회	GET	/com/biz/list	gps	SELECT	CUS	영업장정보	*/
router.get('/com/biz/list', function(req,res){
	var gps = req.body.gps;
	
	res.send(JSON.stringify({gps:gps}));
	res.send(JSON.stringify([]));
});

/*	19	점포상세조회	GET	/com/biz	business_number	SELECT	CUS	영업장정보	*/
router.get('/com/biz', function(req,res){
	var business_number = req.body.business_number;
	
	res.send(JSON.stringify({business_number:business_number}));
	res.send(JSON.stringify([]));
});

/*	20	주문하기	POST	/order	business_number, customer_number, ordername, total_price	INSERT	CUS	주문내역	*/
router.post('/order', function(req,res){
	var business_number = req.body.business_number;
	var customer_number = req.body.customer_number;
	var ordername = req.body.ordername;
	var total_price = req.body.total_price;

	res.send(JSON.stringify({business_number:business_number,customer_number:customer_number,ordername:ordername,total_price:total_price}));
});

/*	21	주문취소하기	DELETE	/order	rowid	DELETE	CUS	주문내역	*/
router.delete('/order', function(req,res){
	var rowid = req.query.rowid;
	res.send(JSON.stringify({rowid:rowid}));
});

/*	22	고객주문내역조회	GET	/order/cus/list	customer_number, date	SELECT	CUS	주문내역	*/
router.get('/order/cus/list', function(req,res){
	var customer_number = req.body.customer_number;
	var date = req.body.date;

	res.send(JSON.stringify({customer_number:customer_number, date:date}));
	res.send(JSON.stringify([]));
});

module.exports = router;
