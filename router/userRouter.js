const express = require("express");
const {
  loginController,
  logoutController,
  signupController,
} = require("../controller/userController");
const router = express.Router();

router.post("/login", loginController);
router.get("/logout", logoutController);
router.post("/signup", signupController);

module.exports = router;
