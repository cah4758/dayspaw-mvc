const router = require('express').Router();
const Customer = require('../../models/Customer');

// GET all customers
router.get('/', async (req, res) => {
  // Get all customers from the customer table
  try{
    const allCustomers = await Customer.findAll()
    res.render('homepage');
  return res.json(allCustomers);
  }

  catch(err) {
    res.json(err);
  }
});

router.get('/customers', async (req, res) => {
  res.send('testing testing')
})
  

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
  try{
    const newCustomerData = await Customer.create(req.body);
    res.status(200).json(newCustomerData);
  } 

  catch (err) {
  res.status(400).json(err);
  }
});

// POST seed data for testing
router.post('/seed', (req, res) => {
  Customer.bulkCreate([
    {
      customer_first_name: 'Luke',
      customer_last_name: 'Anderson',
      customer_phone: '12148652214',
      customer_email: 'luke@gmail.com',
      dog_name: 'Zoey',
    },
    {
      customer_first_name: 'Mitchell',
      customer_last_name: 'Carlson',
      customer_phone: '13095541120',
      customer_email: 'mitchell@gmail.com',
      dog_name: 'Grizzly',
    },
    {
      customer_first_name: 'Mike',
      customer_last_name: 'Mallon',
      customer_phone: '18475620014',
      customer_email: 'mallon128@gmail.com',
      dog_name: 'Simba',
    },
  ]).then(() => {
    res.send('Seeding Success!');
  });
});

module.exports = router;
