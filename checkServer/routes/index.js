var express = require('express');
var router = express.Router();

//이 페이지의 현재 주소: http:localhost:3000/
//목적 주소: :3000/user/

router.use('/user',require('./user'));
router.use('/store',require('./store'));
router.use('/card',require('./card'));

module.exports = router;
