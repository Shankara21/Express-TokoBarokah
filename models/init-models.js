var DataTypes = require("sequelize").DataTypes;
var _transaksi = require("./transaksi");

function initModels(sequelize) {
  var transaksi = _transaksi(sequelize, DataTypes);


  return {
    transaksi,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
