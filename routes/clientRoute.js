const router = require("express").Router();
const clientCtrl = require("../controllers/clientCtrl");
const auth = require("../middleware/auth");

router.post("/register", clientCtrl.registerUser);
router.post("/login", clientCtrl.loginUser);

router.get("/verify", clientCtrl.verifiedToken);

module.exports = router;
