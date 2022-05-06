const express = require('express');
 const bodyParser = require('body-parser');
 const app = express();

 const path = require('path');
//  const Users = require('/index.js');
 app.use(express.static(path.join(__dirname, 'manager_section')));
  
 app.use(express.json());
 app.use(express.urlencoded({extended:false}));


/* Connection of Mongoose*/
 const mongoose=require('mongoose');
 mongoose.connect('mongodb+srv://krishna:krishna@cluster0.a09oz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useUnifiedTopology : true,
    useNewUrlParser : true,

 }).then(console.log('mongoose connected'));
 const connection=mongoose.connection;

 /* Get home page */
 app.get("/",function(req, res){
   res.sendFile(__dirname + "/sites/index.html");
 });
 /* add restaurant */
app.get("/add-listing-with-menu-list",function(req, res){
  res.sendFile(__dirname + "/sites/add-listing-with-menu-list.html");
});
/*Get Reviewsy*/
app.get("/reviews",function(req, res){
  res.sendFile(__dirname + "/sites/reviews.html");
  console.log(req.body);
});
/* Get tables page */
app.get("/tables",function(req, res){
  res.sendFile(__dirname + "/sites/tables.html");
});

/* Get orders */
app.get("/orders",function(req, res){
  res.sendFile(__dirname + "/sites/orders.html");
});

 app.listen(8000, () => console.log("Successfully server started."));
