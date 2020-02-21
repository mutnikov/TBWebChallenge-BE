const jwt = require('jsonwebtoken');

const userService = require('../services/user');

const login = async (req, res) => {
  try {
    const result = await userService.login(req.body);

    delete result.dataValues.password;

    const token = jwt.sign({ user: result }, process.env.JWT_TOKEN_SECRET, {
      expiresIn: 86400,
    });
    res.status(200).send({ user: result, token });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

const signUp = async (req, res) => {
  try {
    const result = await userService.signUp(req.body);

    res.status(201).send(result);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};


module.exports = {
  login,
  signUp,
};
