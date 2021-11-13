const router = require("express").Router();
const {
  User
} = require("../../models");


router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userName = await User.findOne({
      where: {
        name: req.body.name
      }
    });

    const validPassword = await userData.checkPassword(req.body.password);

    if (!userName || !validPassword) {
      res
        .status(400)
        .json({
          message: "Incorrect email or password, please try again"
        });
      return;
    } else {
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;

        res.json({
          user: userData,
          message: "You are now logged in!"
        });
      })
    };
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  console.log("userRoutes.post /logout")
  try {
    req.session.destroy(() => {
    res.status(204).end();
      
    })
  } 
  catch (error){throw "router.post route failed =(" + error}
  });


module.exports = router;

// finally {res.redirect('login')}