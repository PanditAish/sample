const express = require("express");

const router = express.Router();

const { getAllProduct, getAllProductText} = require("../controllers/productt");

router.route("/").get(getAllProduct);
router.route("/testing").get(getAllProductText);

module.exports = router;