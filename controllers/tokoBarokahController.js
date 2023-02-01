const { transaksi, sequelize } = require("../models");

module.exports = {
  filterIncomeByMonth: async (req, res, next) => {
    try {
      const { month } = req.body;
      let result;
      if (month) {
        result = await sequelize.query(
          `SELECT TRIM(username) as username, SUM(qty) AS total_qty, SUM(total_nilai) as income FROM transaksi WHERE MONTH(tanggal) = ${month} GROUP BY username`
        );
      } else {
        result = await sequelize.query(
          `SELECT TRIM(username) as username, SUM(qty) AS total_qty, SUM(total_nilai) as income FROM transaksi GROUP BY username`
        );
      }
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
  countIncomeByMonth: async (req, res, next) => {
    try {
      const result = await sequelize.query(
        "SELECT MONTH(tanggal) as month, SUM(total_nilai) as income FROM transaksi GROUP BY MONTH(tanggal)"
      );
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
};
