const router = require('express').Router();
const v1 = require('./v1');
const validateToken = require('./validateToken');

router.use('/api/v1', validateToken, v1);
router.use('/health-check', (req, res) => res.status(200).send('OK'));

module.exports = router;
