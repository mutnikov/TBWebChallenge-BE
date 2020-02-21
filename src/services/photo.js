const { Picture } = require('../database/models');
const uploadPhoto = require('../utils/aws/uploadPhoto');


module.exports = {
  loadPhoto: async (image, user) => {
    const imageUrl = await uploadPhoto(image);

    await Picture.create({
      url: imageUrl,
      userId: user.id,
    });
  },
  async getAll(userId) {
    return Picture.findAll(
      {
        where: {
          userId,
        },
      },

    );
  },
};
