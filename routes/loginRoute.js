const router = require("express").Router();
const {
  verifiedToken,
  registerUser,
  loginUser,
} = require("../controllers/loginCtrl");
const loginCtrl = require("../controllers/loginCtrl");
const auth = require("../middleware/auth");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/verify", verifiedToken);

module.exports = router;
