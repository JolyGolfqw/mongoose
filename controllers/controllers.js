const Student = require("../models/Student.model");

module.exports.controllers = {
  for_get: async function (req, res) {
    const studentAw = await Student.find();
    res.json(studentAw);
  },
  for_post: async function (req, res) {
    const { name, phone, age } = req.body;
    await Student.create({
      name,
      phone,
      age,
    });
    res.json("Студент добавлен");
  },
  for_delete: async function (req, res) {
    const { id } = req.params;
    try {
      await Student.findByIdAndRemove(id);
      res.json(`Пользователь с ид: ${id}, удален.`);
    } catch (err) {
      res.json(err);
    }
  },
  for_patch: async function (req, res) {
    const { id } = req.params;
    try {
      const stud = await Student.findByIdAndUpdate(id, {
        $set: { name: req.body.name },
      });
      res.json(stud);
    } catch (err) {
      res.json(err);
    }
  },
};
