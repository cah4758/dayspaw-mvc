const router = require('express').Router();
const Customer = require('../../models/Customer');

// GET all customers
router.get('/', async (req, res) => {
  // Get all customers from the customer table
  try{
    const allCustomers = await Customer.findAll()
  
  return res.json(allCustomers);
  }

  catch(err) {
    res.json(err);
  }
});
  

// GET a customer
router.get('/:customer_id', async (req, res) => {
  // Get one customer from the customer table
  try{
    const selectCustomers = await Customer.findOne({
      where: { 
        customer_id: req.params.customer_id 
      },
    });

    return res.json(selectCustomers);
  }

  catch(err) {
      res.json(err);
    }  
});
  
// POST new customer
router.post('/', async (req, res) => {
  Customer.create({
    customer_first_name: req.body.customer_first_name,
    customer_last_name: req.body.customer_last_name,
    customer_phone: req.body.customer_phone,
    customer_email: req.body.customer_email,
    dog_name: req.body.dog_name
  }).then((result)=>{
    res.status(200).json(result)
  })

  .catch((err)=>{
      console.log(err);
      res.status(400).json(err);
  });
}); 
  

module.exports = router;
