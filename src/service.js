const express  = require("express");
const app = express(); 
const service = "orders"
const port = 8080;

const orders = [
  { id: 1, customerId: 1, item: "Widget1" },
  { id: 2, customerId: 1, item: "Widget2" },
  { id: 3, customerId: 2, item: "Widget3" },
];

let orderList = [];

app.get(`/${service}/`, function(req,res){
  console.log("in get customer: " + req.query.customerID);
  orderList = orders.filter( order => { 
    return (order.customerId === parseInt(req.query.customerID));
  });

   res.send(orderList); 
});

app.listen(port, function (){
  console.log(`Service ${service} running on port: ${port}`);
});
