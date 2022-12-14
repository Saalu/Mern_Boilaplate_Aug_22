const Employees = require("../models/empModel");

const empCtrl = {
  createEmployee: async (req, res) => {
    const { username, position, salary, date } = req.body;
    try {
      const newEmp = new Employees({
        username,
        position,
        salary,
        date,
        user_id: req.user.id,
        createdBy: req.user.name,
      });

      await newEmp.save();
      res.json({ msg: `Added an employee: ${username}` });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateEmployee: async (req, res) => {
    try {
      const { username, position, salary } = req.body;

      const empUpdate = await Employees.findByIdAndUpdate(
        { _id: req.params.id },
        { username, position, salary },
        { new: true }
      );

      res.json(empUpdate);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deleteEmployee: async (req, res) => {
    try {
      await Employees.findByIdAndDelete(req.params.id);
      res.json({ msg: "Removed employee" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getEmployee: async (req, res) => {
    try {
      const emp = await Employees.findById(req.params.id);
      res.json(emp);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getEmployees: async (req, res) => {
    try {
      const emps = await Employees.find();
      res.json(emps);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = empCtrl;
