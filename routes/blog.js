const router = require('koa-router')();
var blog = require('../public/assets/blog.json');

router.prefix('/blog');

/* GET users listing. */
router.get('/', async (ctx, next) => {
  ctx.body = blog;
});

module.exports = router;