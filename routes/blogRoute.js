const router = require("express").Router();

router
  .route("/")
  .get((req, res) => {
    res.json({ msg: "Get all blocks heres.." });
  })
  .post();

router.route("/:id").get().put().delete();

module.exports = router;
