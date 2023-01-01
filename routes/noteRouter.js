const router = require("express").Router();
const auth = require("../middleware/auth");
const noteCtrl = require("../controllers/noteCtrl");

router
  .route("/")
  .get((req, res) => res.json({ msg: "Test Notes" }))
  .post();
router.route("/:id").get().post().put().delete();

module.exports = router;
