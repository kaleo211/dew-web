var router = require('express').Router();
var models = require('../models');
var controllers = require('../controllers');
var useragent = require('useragent');

router.use(function (req, res, next) {
  next();
});

router.get('/', function (req, res) {
  controllers.crash.get().then(function (crashes) {
    res.status(200).render('index', {crashes});
  });
});

router.get('/crash', function (req, res) {
  var agent = useragent.parse(req.headers['user-agent']);
  controllers.crash.add(
    req.ip,
    agent.os.toString(),
    agent.toAgent(),
    new Date()
  ).then(function (crash) {
    process.exit(1);
  });
});

module.exports = router;
