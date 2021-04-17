const router = require("express").Router();
const { Faves, User } = require("../../models");
const withAuth = require("../../utils/auth");

/**The 'faveRoutes' router.post creates a new input into the Faves model which has a foreign key of 'user_id' so multiple parks saved by the same logged in user can be pulled based on a matching foreign key */

router.post("/", withAuth, async (req, res) => {
  console.log("post", req.body);
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

/** The 'faveRoutes' router.get finds all of the parks with the requested user_id (verified with Authentication) and sends the data to the Front End to be displayed  */
router.get("/data", withAuth, async (req, res) => {
  try {
    const parkData = await Faves.findAll({
      where: { user_id: req.session.user_id },
      include: [
        {
          model: User,
        },
      ],
    });

    res.send({ data: parkData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
