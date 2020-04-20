var express = require('express');
var router = express.Router();

//이 페이지의 현재 주소: localhost:3000/store/store
router.get('/', async (req, res) => {
    res.render('index', { title: 'Express' });
});



module.exports = router;