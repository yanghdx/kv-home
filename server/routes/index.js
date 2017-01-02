var Router = require('koa-router');
var indexCtrl = require('../controllers/indexCtrl');
var videosCtrl = require('../controllers/videosCtrl');

const router = Router();

router.get('/', indexCtrl);

router.get('/videos', videosCtrl);

module.exports = router;