const express = require("express"); //all routes are declared here and transfered to the express app via router

const router = express.Router();

const exemplu = require("./exemplu");

router.use("/exemplu", exemplu);

module.exports = router;