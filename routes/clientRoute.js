const router = require("express").Router();

router.post("/register", (req, res) => {
  res.json({ msg: "Register User" });
});
router.post("/login", (req, res) => {
  res.json({ msg: "Login User" });
});

module.exports = router;
