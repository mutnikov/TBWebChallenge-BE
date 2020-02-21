const taskService = require('../services/task');

const create = async (req, res) => {
  try {
    const { user } = req;
    const result = await taskService.create({ ...req.body, userId: user.id });

    res.status(201).send(result);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

const change = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await taskService.change(id, req.body);

    res.status(201).send(result);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const { user } = req;
    const result = await taskService.getAll(user.id);
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};


module.exports = {
  create,
  getAll,
  change,
};
