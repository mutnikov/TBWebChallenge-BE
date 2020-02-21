const photoService = require('../services/photo');

const loadPhoto = async (req, res) => {
  try {
    const { files, user } = req;
    const { image } = files;

    await photoService.loadPhoto(image, user);
    res.status(200).send();
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const { user } = req;
    const result = await photoService.getAll(user.id);
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};


module.exports = {
  loadPhoto,
  getAll,
};
