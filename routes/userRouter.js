const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");
const auth = require("../middleware/auth");
// const userCtrl = require("../controllers/userCtrl");
const { registerUser, loginUser } = require("../controllers/userCtrl");

// ==========Register User==========
router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/verify", auth, (req, res) => {
  res.json(req.user);
});

module.exports = router;
