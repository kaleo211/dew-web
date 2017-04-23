module.exports = function (sequelize, DataTypes) {
  return sequelize.define('crash', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ip: DataTypes.STRING,
    device: DataTypes.STRING,
    browser: DataTypes.STRING,
    date: DataTypes.DATE
  });
};
