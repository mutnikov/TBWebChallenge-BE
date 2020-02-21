const { Task } = require('../database/models');


module.exports = {
  async getAll(userId) {
    return Task.findAll(
      {
        where: {
          userId,
        },
      },

    );
  },
  async create(options) {
    return Task.create(options);
  },

  async change(id, options) {
    return Task.update(options, {
      where: {
        id,
      },
    });
  },
};
