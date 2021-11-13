const router = require("express").Router();
const userRoutes = require("./userRoutes");
// const projectRoutes = require('./projectRoutes');

router.use("/users", userRoutes);
// router.use('/projects', projectRoutes);

router.get("/login", async (req, res) => {

  if (!req.session.logged_in) {
    res.render('login')
  } else {
    res.render('homepage');
  }
});
// router.post("/", async (req, res) => {
//      try {
//        const userData = await User.create(req.body);
   
//        req.session.save(() => {
//          req.session.user_id = userData.id;
//          req.session.logged_in = true;
   
//          res.status(200).json(userData);
//        });
//      } catch (err) {
//        res.status(400).json(err);
//      }
//    });

   router.post("/login", async (req, res) => {
    try {
      console.log(req.body)
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
          // req.session.user_id = userData.id;
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

module.exports = router;
