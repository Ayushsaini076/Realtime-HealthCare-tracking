const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser,
    logoutUser,
    getUserChartData,
    getUserData,
  } = require("../controllers/userController");
  const { isAuthenticated } = require("../middleware/auth");
  
  router.route("/register").post(registerUser);
  router.route("/login").post(loginUser);
  router.route("/chartData").get(isAuthenticated, getUserChartData);
  router.route("/logout").get(logoutUser);
  router.route("/user").get(isAuthenticated, getUserData);

module.exports = router;