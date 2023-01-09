const router = require("express").Router();
const empCtrl = require("../controllers/empCtrl");
const auth = require("../middleware/auth");

router
  .route("/")
  .get(auth, empCtrl.getEmployees)
  .post(auth, empCtrl.createEmployee);
router
  .route("/:id")
  .put(auth, empCtrl.updateEmployee)
  .delete(auth, empCtrl.deleteEmployee)
  .get(auth, empCtrl.getEmployee);

module.exports = router;
