const express = require('express');
const authRouter = express.Router();
const { signupController, loginController}
    = require("../controllers/authController");
authRouter.post("/signup", signupController)
authRouter.post("/login", loginController);
module.exports = authRouter;