const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");
const auth = require("../middleware/auth");

// ==========Register User==========
router.post("/register", userCtrl.registerUser);

router.post("/login", userCtrl.loginUser);

//verify token
// router.get("/verify", auth, (req, res) => {
//   res.json(req.user);
// });
router.get("/verify", userCtrl.verifiedToken);

module.exports = router;
