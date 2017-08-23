const router = require('koa-router')()
var axios = require('axios');

var { weatherhost, WEATHERKEY } = require('./api');

router.prefix('/weather')

router.get('/now', (ctx, next) => {
  var params = Object.assign({}, req.query, { key: WEATHERKEY })
  axios.get(`${weatherhost}/now.json`, { params }).then(function (json) {
     ctx.body = json.data;
  })
});

router.get('/future',  (ctx, next) => {
  var params = Object.assign({}, req.query, { key: WEATHERKEY })
  axios.get(`${weatherhost}/daily.json`, { params }).then(function (json) {
    ctx.body = json.data;
  })
});

module.exports = router;
