const router = require("express").Router();
const userRoutes = require("./userRoutes");
<<<<<<< HEAD
const clientRoutes = require('./clientRoutes');

router.use('/users', userRoutes);
router.use('/clients', clientRoutes);
 
=======
const customerRoutes = require("./customerRoutes");
const appointmentRoutes = require("./appointmentRoutes");
// const projectRoutes = require('./projectRoutes');

router.use("/users", userRoutes);
router.use("/customers", customerRoutes);
router.use("/appointments", appointmentRoutes);
// router.use('/projects', projectRoutes);
>>>>>>> 94a484325afac43a37af460b1e8f050f8495c508

module.exports = router;
