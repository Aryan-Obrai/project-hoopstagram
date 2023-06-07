const express = require("express");
const User = require("../schemas/Users");

const router = express.Router();

//GET Methods
router.get("/account_info", (req, res) => {
  if (req.user) {
    //dont send password
    let formattedUser = {
      username: req.user[0].username,
      email: req.user[0].email,
      _id: req.user[0]._id,
      favoriteTeams: req.user[0].favoriteTeams,
    };

    res.status(200).send({ user: formattedUser });
  } else {
    //no user logged in
    res.sendStatus(204);
  }
});

router.get("/feed", (req, res) => {
  if (req.user) {
    res.send({ msg: "LOGGED IN" });
  } else {
    res.send({ msg: "NOT LOGGED IN" });
  }
});

router.get("/games", (req, res) => {});

router.get("/teams_players", (req, res) => {});

//POST Methods

//PUT Methods
router.put("/pick_teams", async (req, res) => {
  const update = await User.findOneAndUpdate(
    { username: req.body.username },
    { favoriteTeams: req.body.teams },
    { new: true }
  );

  console.log(update);
  res.send({ msg: "RECEIVED" });
});

module.exports = router;
