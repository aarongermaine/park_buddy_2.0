const router = require('express').Router();
const { Parks } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPark = await Parks.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPark);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const parkData = await Parks.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!parkData) {
      res.status(404).json({ message: 'No park found with this id!' });
      return;
    }

    res.status(200).json(parkData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

