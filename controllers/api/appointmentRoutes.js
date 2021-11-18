const router = require('express').Router();
const Appointment = require('../../models/Appointment');

// GET all appointments
router.get('/', async (req, res) => {
  // Get all appointments from the appointments table
  try{
    const allAppointments = await Appointment.findAll()
  
  return res.json(allAppointments);
  }

  catch(err) {
    res.json(err);
  }
});
  

// GET a appointment
router.get('/:appointment_time', async (req, res) => {
  // Get one appointment from the appointment table
  try{
    const selectAppointment = await Appointment.findOne({
      where: { 
        appointment_time: req.params.appointment_time
      },
    });

    return res.json(selectAppointment);
  }

  catch(err) {
      res.json(err);
    }  
});


// Updates appointment based on its droptime
router.put('/:appointment_time', async (req, res) => {
    // Calls the update method on the Appointment model
    try{
        const updateAppointment = await Appointment.update(
        {
        // All the fields you can update and the data attached to the request body.
        appointment_time: req.body.appointment_time,
        customer_id: req.body.customer_id,
        },
        {
        // Gets the appointment time based on the time given in the request parameters
        where: {
            appointment_time: req.params.appointment_time,
        },
    });

    return res.json(updateAppointment);
    }

    catch(err) {
        res.json(err);
      }  
});


module.exports = router;