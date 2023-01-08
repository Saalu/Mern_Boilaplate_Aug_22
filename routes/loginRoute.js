const router = require("express").Router();
const loginCtrl = require("../controllers/loginCtrl");

router.post("/register", loginCtrl.registerUser);
router.post("/login", loginCtrl.loginUser);

module.exports = router;
