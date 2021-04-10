const router = require('express').Router();
const userRoutes = require('./userRoutes');
const parksRoutes = require('./parksRoutes');

router.use('/users', userRoutes);

router.use('/parks', parksRoutes);

module.exports = router;
