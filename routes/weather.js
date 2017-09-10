const router = require('koa-router')()
var axios = require('axios');

var { weatherhost, WEATHERKEY } = require('./api');

router.prefix('/weather')

router.get('/now', async (ctx, next) => {
  var params = Object.assign({}, ctx.request.query, { key: WEATHERKEY })
  const res= await axios.get(`${weatherhost}/now.json`, { params });
  ctx.body = res.data;

});

router.get('/future', async (ctx, next) => {
  var params = Object.assign({}, ctx.request.query, { key: WEATHERKEY })
  const res = await axios.get(`${weatherhost}/daily.json`, { params });
  ctx.body = res.data;
});

module.exports = router;
