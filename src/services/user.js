const bcrypt = require('bcrypt');
const { User } = require('../database/models');


module.exports = {
  async login(options) {
    const userFromDataBase = await User.findOne(
      {
        where: {
          email: options.email,
        },
      },

    );

    if (!userFromDataBase) {
      throw Error('User does not exist');
    }

    if (bcrypt.compareSync(options.password, userFromDataBase.password)) {
      return userFromDataBase;
    }
    throw Error('User does not exist');
  },
  async signUp(options) {
    if (!options.email || !options.userName) {
      throw Error('Please fill all data');
    }

    const userFromDataBase = await User.findOne(
      {
        where: {
          email: options.email,
        },
      },

    );

    if (userFromDataBase) {
      throw Error('User already exist');
    } else {
      const salt = bcrypt.genSaltSync(10);
      const passwordToSave = bcrypt.hashSync(options.password, salt);

      return User.create({
        userName: options.userName,
        password: passwordToSave,
        email: options.email,
        logo: options.logo,
      });
    }
  },
};
