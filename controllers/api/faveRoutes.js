const router = require('express').Router();
const { Faves } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newFave = await Faves.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newFave);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
