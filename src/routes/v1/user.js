const router = require('express').Router();
const { user: middleware } = require('../../middlewares');

router
  .post('/login', middleware.login)
  .post('/sign-up', middleware.signUp);

module.exports = router;
