const router = require("express").Router();
const empCtrl = require("../controllers/empCtrl");

router.route("/").get(empCtrl.getEmployees).post(empCtrl.createEmployee);
router
  .route("/:id")
  .put(empCtrl.updateEmployee)
  .delete(empCtrl.deleteEmployee)
  .get(empCtrl.getEmployee);

module.exports = router;
