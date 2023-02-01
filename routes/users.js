var express = require("express");
const tokoBarokahController = require("../controllers/tokoBarokahController");
var router = express.Router();

/* GET users listing. */

router.post("/filterIncomeByMonth", tokoBarokahController.filterIncomeByMonth);
router.get("/testIncome", tokoBarokahController.filterIncomeByMonth);
router.get("/countIncome", tokoBarokahController.countIncomeByMonth);

module.exports = router;
