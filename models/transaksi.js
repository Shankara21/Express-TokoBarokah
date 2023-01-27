const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaksi', {
    kode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nomor_penjualan: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    kode_barang: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_nilai: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transaksi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "kode" },
        ]
      },
    ]
  });
};
