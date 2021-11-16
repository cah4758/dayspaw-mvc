const router = require("express").Router();
const { User } = require("../../models");


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

router.post('/login', async (req, res) => {
  // console.log(this);
  try {
    const userData = await User.findOne({ where: { name: req.body.name } });
    // console.log(req.session)
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        res.render('login')
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;      
      res.render('homepage')
    });
    
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  try {
    req.session.destroy(() => {
    res.status(204).end();
    })
  }
  catch (error){throw error + "post api/users/ logout route failed =("}
  });


module.exports = router;

