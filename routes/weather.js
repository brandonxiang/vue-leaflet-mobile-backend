var express = require('express');
var router = express.Router();
var axios = require('axios');

var { weatherhost, WEATHERKEY } = require('./api');

router.get('/now', function (req, res, next) {
  var params = Object.assign({}, req.query, { key: WEATHERKEY })
  axios.get(`${weatherhost}/now.json`, { params }).then(function (json) {
    res.send(json.data)
  })
});

router.get('/future', function (req, res, next) {
  var params = Object.assign({}, req.query, { key: WEATHERKEY })
  axios.get(`${weatherhost}/daily.json`, { params }).then(function (json) {
    res.send(json.data)
  })
});

module.exports = router;
