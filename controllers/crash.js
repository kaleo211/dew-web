var Sequelize = require('sequelize');
var models = require('../models');

var get = function () {
  return models.crash.findAll().then((crashes) => {
    return crashes.map(function (crash) {
      return crash.get({ plain: true })
    });
  });
};

var add = function (ip, device, browser, date) {
  return models.crash.create({
    ip: ip,
    device: device,
    browser: browser,
    date: new Date(date)
  }).then(function (crash) {
    return crash.get({ plain: true });
  });
}

var crash = {
  get,
  add
}

module.exports = crash
