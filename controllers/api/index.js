const router = require("express").Router();
const userRoutes = require("./userRoutes");
const customerRoutes = require('./customerRoutes');
const appointRoutes = require('./appointmentRoutes');

router.use('/users', userRoutes);
router.use('/customers', customerRoutes);
router.use('/appointmentRoutes', appointRoutes);
 

module.exports = router;
