var Sequelize = require('sequelize');
var fs = require('fs')
var path = require('path')

var vcap = JSON.parse(process.env.VCAP_SERVICES)
if (!vcap['cleardb']) {
  process.exit(1);
}
var cred = vcap['cleardb'][0]['credentials']

console.log(
  cred['name'],
  cred['username'],
  cred['password'],
  cred['hostname'],
  cred['port']
)

var sequelize = new Sequelize(cred['name'], cred['username'], cred['password'], {
  host: cred['hostname'],
  pool: {
    max: 4,
    min: 0,
    maxIdleTime: 120000
  },
  port: cred['port'],
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

sequelize.sync();

var db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

fs.readdirSync(__dirname)
  .filter(function(file) {
    return file.indexOf('.')!=0 && file != 'index.js';
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    console.log
    db[model.name] = model;
  });

Object.keys(db).forEach(function(model) {
  if ("associate" in db[model]) {
    db[model].associate(db);
  }
});

module.exports = db;
