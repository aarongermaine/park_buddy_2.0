const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
// const parksRoutes = require('./parksRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

// NEW ROUTE
// router.use('/parks', parksRoutes);


module.exports = router;
