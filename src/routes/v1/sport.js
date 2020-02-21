const router = require('express').Router();
const { sport: middleware } = require('../../middlewares');

router
  .get('/', middleware.get)
  .get('/beat', middleware.getBeat);

module.exports = router;
