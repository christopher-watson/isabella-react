const router = require('express').Router();
const responseRoutes = require('./responseRoutes');

router.use('/clients', responseRoutes);

module.exports = router;