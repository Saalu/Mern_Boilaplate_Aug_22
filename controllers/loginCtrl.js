const Users = require("../models/loginModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginCtrl = {
  registerUser: async (req, res) => {
    try {
      const { username, email, password } = req.body;

      const user = await Users.findOne({ email: email });
      if (user)
        return res.status(400).json({ msg: "The email already exists. " });

      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = new Users({
        username: username,
        email: email,
        password: passwordHash,
      });
      await newUser.save();
      res.json({ msg: "Registration successful" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ email: email });
      if (!user) return res.status(500).json({ msg: "Email does not exist" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(500).json({ msg: "Incorrect password" });

      res.json({ msg: "Login success" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = loginCtrl;
