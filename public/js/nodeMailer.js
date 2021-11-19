const nodemailer = require("nodemailer");

//Test Customer:
cust = [
  {
    "customer_first_name": "Mike",
    "customer_last_name": "Mallon",
    "customer_phone": 18475620014,
    "customer_email": "mallon127@gmail.com",
    "dog_name": "Simba"
}
];


async function main (customer){


  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dayspaww@gmail.com',
      pass: 'Project2!'
    }
  })

console.log(customer);

  let info = await transporter.sendMail({

    from: '"DaySpaw 🐾" <dayspaww@gmail.com>',
    to: `${customer[0].customer_email}, ${customer[0].customer_email}`,
    subject: `${customer[0].dog_name} is ready to be picked up!`,
    text: "Please come see us at 123 Main Street to pick up your furry friend!",
    html: `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DaySpaw 🐾</title>
    </head>
      <body>
        <p>Please come see us at 123 Main Street to pick up your furry friend!</p>
        
        <p>Our hours of operation are 9AM to 5PM</p>
      </body>
    </html>
    
    `,
  });
}

main(cust);