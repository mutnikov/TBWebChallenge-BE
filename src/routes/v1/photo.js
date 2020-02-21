const router = require('express').Router();
const { photo: middleware } = require('../../middlewares');
const formidableMiddleware = require('express-formidable');


router.use(formidableMiddleware())
router
  .post('/', middleware.loadPhoto)
  .get('/', middleware.getAll);

module.exports = router;
