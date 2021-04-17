const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

/**There are two 'index.js' files in the controllers folder, however each one is on a different level, this one defines which files are inside the main level ('controller' folder) */

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
