var express = require('express');
var blog = require('../public/assets/blog.json')
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send(blog);
});

module.exports = router;