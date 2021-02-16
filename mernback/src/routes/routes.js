const express = require("express");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const userSchemaCopy = require("../models/registers");
const register = require("../models/registers");

router.post("/register", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  const {
    fname,
    lname,
    email,
    password,
    cpassword,
    aadhar,
    mobile,
    age,
  } = req.body;
  try {
    let user = await register.findOne({
      email,
    });
    if (user) {
      //console.log("exist");notify user
      return res.status(400).json({
        msg: "User Already Exists",
      });
    }
    registeredUser = new userSchemaCopy({
      fname,
      lname,
      email,
      password,
      cpassword,
      aadhar,
      mobile,
      age,
    });
    const salt = await bcrypt.genSalt(10);
    registeredUser.password = await bcrypt.hash(password, salt);
    await registeredUser.save();
    const payload = {
      registeredUser: {
        id: registeredUser.id,
      },
    };

    jwt.sign(
      payload,
      "randomString",
      {
        expiresIn: 10000,
      },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          token,
        });
      }
    );
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error in Saving");
  }
});

module.exports = router;
