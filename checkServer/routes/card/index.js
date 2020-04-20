var express = require('express');
var router = express.Router();

//이 페이지의 현재 주소: http:localhost:3000/card
//목적 주소: :3000/card/file명

router.use('/cardinfo',require('./cardinfo'));

module.exports = router;