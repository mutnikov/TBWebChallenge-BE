const router = require('express').Router();
const { task: middleware } = require('../../middlewares');

router
  .post('/', middleware.create)
  .post('/:id', middleware.change)
  .get('/', middleware.getAll);

module.exports = router;
