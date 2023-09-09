const jwt = require("jsonwebtoken");
const secrets = require("../secrets/secret");
const bcrypt = require('bcrypt');
const FooduserModel = require("../models/userModel");

async function signupController(req, res) {
    try {
        let data = req.body;
        console.log(data);
        let newUser = await FooduserModel.create(data);
        console.log(newUser);
        res.status(201).json({
            result: "User Signed Up"
        });
    } catch (err) {
        res.status(400).json({
            result: err.message
        }
        );
    }
}


async function loginController(req, res) {
  try {
    const data = req.body;
    const { email, password } = data;
    if (email && password) {
      const user = await FooduserModel.findOne({ email: email });
      if (user) {
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
          const token = jwt.sign(
            {
              data: user['_id'],
              exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // Token expiration time (24 hours)
            },
            secrets.JWTSECRET
          );
          res.cookie('JWT', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Set 'secure' to true in production (HTTPS)
            sameSite: 'strict', // Adjust this according to your requirements
          });
          user.password = undefined;
          user.confirmPassword = undefined;
          console.log('login', user);
          res.status(200).json({ user });
        } else {
          res.status(400).json({ result: 'Email or password does not match' });
        }
      } else {
        res.status(404).json({ result: 'User not found' });
      }
    } else {
      res.status(400).json({ result: 'User not found, kindly sign up' });
    }
  } catch (err) {
    res.status(500).json({ result: err.message });
  }
}


module.exports = {
    signupController,
    loginController
}
