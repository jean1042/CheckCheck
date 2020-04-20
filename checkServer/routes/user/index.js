var express = require('express');
var router = express.Router();

//이 페이지의 현재 주소: http:localhost:3000/user
//목적 주소: :3000/user/signup


router.use('/reviseinfo',require('./reviseinfo'));
router.use('/signin',require('./signin'));
router.use('/signup',require('./signup'));

module.exports = router;
