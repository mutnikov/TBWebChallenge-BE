const jwt = require('jsonwebtoken');

const basicRoutes = [
  'v1/user/login',
  'v1/user/sign-up',
];

module.exports = (req, res, next) => {
  try {
    if (basicRoutes.find((route) => req.originalUrl.includes(route))) {
      next();
    } else {
      const payload = jwt.verify(
        req.headers.authorization,
        process.env.JWT_TOKEN_SECRET,
      );
      req.user = payload.user;
      next();
    }
  } catch (err) {
    res.status(403).send(err);
  }
};
