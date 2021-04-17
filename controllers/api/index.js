const router = require('express').Router();
const userRoutes = require('./userRoutes');
const faveRoutes = require('./faveRoutes');

/**There are two 'index.js' files in the controllers folder, however each one is on a different level, this one defines which files are inside the 'api' folder */

router.use('/users', userRoutes);
router.use('/faves', faveRoutes);

module.exports = router;
