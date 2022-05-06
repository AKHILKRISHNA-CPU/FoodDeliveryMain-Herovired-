var express = require('express');
 //const bodyParser = require('body-parser');
 var app = express();
 var ratingsinfo;
 var path=require('path')
app.path = require('path');

//  const Users = require('/index.js');
 app.use(express.static(path.join(__dirname, '/Admin/admin_section')));
 app.use(express.static(path.join(__dirname, '/manager/manager_section')));
 app.use(express.static(path.join(__dirname, '/public')));
 app.use(express.json());
 app.use(express.urlencoded({extended:false}));
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
app.use(sessions({
    cookieName: "sessions",
    secret: "nikhil16",
    saveUninitialized:true,
    resave: false
}));
var session;
app.use(express.json());


/* Connection of Mongoose*/
 const mongoose=require('mongoose');
 mongoose.connect('mongodb+srv://krishna:krishna@cluster0.a09oz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useUnifiedTopology : true,
    useNewUrlParser : true,

 }).then(()=>{
   console.log("Mongoose Connected");
 }).catch((e)=>{
   console.log("Mongoose not connected");
 });



 //calling Schemas
 const admindata=require('./schema/Adminlogin.js');
 const managerdata=require('./schema/managerlogin.js');
 const registerdata=require('./schema/register_schema.js');
 const userdata=require('./schema/user_schema.js');
 const feedback=require('./schema/leave-review')
 const Restaurant=require('./schema/Adminaddrestaurant.js')
 const Item=require('./schema/manageritem.js')
 const Usertable=require('./schema/Table-user.js')
 const Pay=require('./schema/Paymentdetails.js')


 //Calling APIS

 // Get Home Page
 app.get("/",function(req, res){
  res.sendFile(__dirname + "/html/index-9.html");
});
/* Get  order */
app.get("/order",function(req, res){
  res.sendFile(__dirname + "/html/order.html");
});
// Get Register Page
app.get("/register",function(req, res){
  res.sendFile(__dirname + "/html/register.html");
});
// Get Leave-review
app.get("/leave-review",function(req, res){
  res.sendFile(__dirname + "/html/leave-review.html");
});
//Get Login Page
app.get("/login",function(req, res){
  res.sendFile(__dirname + "/html/login.html");
  console.log(req.body);
});
//After Logout
app.get("/logout",function(req, res){
  req.session.destroy();
  res.redirect('/');
});
// Get Confirm Page
app.get("/confirm",function(req, res){
  session=req.session;
    if(session.user){
        console.log(session.user);
        res.sendFile(__dirname + '/html/confirm.html');
    }
    else{
        res.redirect("/login")
    }
});

//Get Review Page
app.get('/get-review', function(req,res){
  feedback.find({ range:"5"},function(err,docs){
    if(err){
      console.log(err)
    }
    else{
      res.send(docs)
    }
  })
})

//Post Review
app.post('/leave-review',(req,res)=>{
  var x=req.body.range;
  var y=req.body.review;
  var z=req.body.matter;
  {
      feedback.create({
          range:x,
          review:y,
          matter:z
      })
  }
  res.redirect('/');
})

//Get Detail-restaurant
app.get("/detail-restaurant",function(req, res){
  res.sendFile(__dirname + "/html/detail-restaurant.html");
});
//Get Detail-restaurant-2
app.get("/detail-restaurant-2",function(req, res){
  res.sendFile(__dirname + "/html/detail-restaurant-2.html");
});
//Get Detail-restaurant-3
app.get("/detail-restaurant-3",function(req, res){
  res.sendFile(__dirname + "/html/detail-restaurant-3.html");
});
app.get("/icon-pack-1",function(req, res){
  res.sendFile(__dirname + "/html/icon-pack-1.html");
});
//Get Icons
app.get("/icon-pack-2",function(req, res){
  res.sendFile(__dirname + "/html/icon-pack-2.html");
});

//Manager Section Getting
//Manager DashBoard
app.get("/manager",function(req, res){
  res.sendFile(__dirname + "/manager/sites/index.html");
});
//Manager Login
app.get("/Managerlogin",function(req, res){
  res.sendFile(__dirname + "/manager/sites/ManagerLogin.html");
});
//Manager Add Item
app.get("/additem",function(req, res){
  res.sendFile(__dirname + "/manager/sites/additem.html");
 });
 /*Get Reviews*/
 app.get("/managerreviews",function(req, res){
  res.sendFile(__dirname + "/manager/sites/reviews.html");
  console.log(req.body);
 });
/* Get tables page */
app.get("/managertables",function(req, res){
res.sendFile(__dirname + "/manager/sites/tables.html");
});
/* Get orders */
app.get("/managerorders",function(req, res){
res.sendFile(__dirname + "/manager/sites/orders.html");
});


//Admin section page linking

//Admin Dash Board
app.get("/Admin",function(req, res){
  res.sendFile(__dirname + "/Admin/sites/index.html");
});

//Admin Login
app.get("/Adminlogin",function(req, res){
  res.sendFile(__dirname + "/Admin/sites/AdminLogin.html");
});

//Get Restaurant
app.get("/addrestaurant",function(req, res){
  res.sendFile(__dirname + "/Admin/sites/addrestaurant.html");
 });

 /*Get Reviews*/
app.get("/Adminreviews",function(req, res){
  res.sendFile(__dirname + "/Admin/sites/reviews.html");
  console.log(req.body);
 });

/* Get tables page */
app.get("/Admintables",function(req, res){
  res.sendFile(__dirname + "/Admin/sites/tables.html");
 });

 /* Get orders */
 app.get("/Adminorders",function(req, res){
  res.sendFile(__dirname + "/Admin/sites/orders.html");
 });
 
// Admin Add Restaurant
app.post('/sign_up',(req,res)=>{
  var a=req.body.name;
  var d=req.body.city;
  var e=req.body.address;
  var f=req.body.state;
  var g=req.body.zipcode;
  var h=req.body.cat;
  var z=req.body.img;
  {
      Restaurant.create({
          resname:a,
          city:d,
          address:e,
          state:f,
          zipcode:g,
          cat:h,
          img:z,
      })
  }
  res.redirect('/Admin');
})

//Manager adding restaurant
app.post('/add_item',(req,res)=>{
  var a=req.body.name;
  var d=req.body.des;
  var e=req.body.itemname;
  var x=req.body.cat;
  var g=req.body.price;
  var h=req.body.img;
  {
      Item.create({
          name:a,
          des:d,
          itemname:e,
          price:g,
         img:h,
          cat:x,  
      })
  }
  res.redirect('/Manager');
})

//Get review to  Admin

app.get('/get-rev', function(req,res){
  feedback.find({ range:"5"},function(err,docs){
    if(err){
      console.log(err)
    }
    else{
      res.send(docs)
    }
  })
})


//Get Table-User

app.get('/get-UserTable', function(req,res){
  // console.log(Items)
  Usertable.find({},function(err,docs){
    if(err){
      console.log(err)
    }
    else{
      // console.log(docs)
      res.send(docs)
    }
  })
})

//Posting Address 
app.post('/useraddress',(req,res)=>{
  var x=req.body.First_Name;
  var y=req.body.email_id;
  var z=req.body.Phone;
  var a=req.body.Full_Address;
  var b=req.body.City;
  var c=req.body.Postal_code;
  {
    Usertable.create({
          First_Name:x,
          email_id:y,
          Phone:z,
          Full_Address:a,
          City:b,
          Postal_code:c,

      })
  }
  res.redirect('/order');
})



// Posting Payment Details
app.post('/pDetails',(req,res)=>{
  var x=req.body.Card;
  var y=req.body.Number;
  var z=req.body.Expire;
  var a=req.body.Security;

  
  {
    Pay.create({
         Card:x,
          Number:y,
         Expire:z,
          Security:a,
      
      })
  }
  res.redirect('/order');
})
//Getting the Payment Details Like Card
app.get('/get-Payment', function(req,res){
  // console.log(Items)
  Pay.find({},function(err,docs){
    if(err){
      console.log(err)
    }
    else{
      // console.log(docs)
      res.send(docs)
    }
  })
})


// Admin Login Data
app.get('/admin',function(req,res){
  
  session = req.session;
  if(session.user){
      console.log(session.user)
      res.sendFile(__dirname + '/Admin/sites/AdminLogin.html')
  }
  else{
      res.redirect('/Adminlogin');
  }
})
app.get('/adminlogout',function(req,res){
  req.session.destroy();
  res.redirect('/adminlogin');
})

//post the data to database
app.post('/admindata',function(req,res){
  console.log(req.body);
  session=req.session; 
  admindata.findOne({email:req.body.email,password:req.body.password},function(err,docs){
      if(err || docs==null)
      {
          res.sendStatus(500);
      }
      else{
          session.user=docs;
          res.send(docs);
      }
  })
});

// manager Login Data
app.get('/manager',function(req,res){
  
  session = req.session;
  if(session.user){
      console.log(session.user)
      res.sendFile(__dirname + '/manager/sites/managerLogin.html')
  }
  else{
      res.redirect('/managerlogin');
  }
})
app.get('/managerlogout',function(req,res){
  req.session.destroy();
  res.redirect('/managerlogin');
})

//post the data to database
app.post('/managerdata',function(req,res){
  console.log(req.body);
  session=req.session; 
  managerdata.findOne({email:req.body.email,password:req.body.password},function(err,docs){
      if(err || docs==null)
      {
          res.sendStatus(500);
      }
      else{
          session.user=docs;
          res.send(docs);
      }
  })
});
app.post('/senddata',function(req,res){
console.log(req.body);
var obj=new registerdata({
  name:req.body.name,
  email:req.body.email,
  password:req.body.password,
})
registerdata.findOne({email:req.body.email},function(err,docs){
  if(err || docs==null){
    console.log(err)
    obj.save(function(err,results){
      if(results){
        console.log("results " + results);
        res.send(results);
      }
      else{
        console.log(err)
        res.send(err);
      }
    })
  }
  else{
    res.sendStatus(500);
  }
})
});

//User Login Data
app.post('/logindata',function(req,res){
  console.log(req.body)
  session=req.session;

  registerdata.findOne({email:req.body.email,password:req.body.password},function(err,docs){
    if(err || docs==null){
      res.sendStatus(500);
    }
    else{
      session.user=docs;
      res.send(docs);

    }
    
  })
});


// Get restaurant
app.get('/get-restaurant1', function(req,res){
  // console.log(Items)
  Restaurant.find({cat:"Veg"},function(err,docs){
    if(err){
      console.log(err)
    }
    else{
      // console.log(docs)
      res.send(docs)
    }
  })
})

//Get Restaurant-2
app.get('/get-restaurant2', function(req,res){
  // console.log(Items)
  Restaurant.find({cat:"Non-Veg"},function(err,docs){
    if(err){
      console.log(err)
    }
    else{
      // console.log(docs)
      res.send(docs)
    }
  })
})
//Get Restaurant-3
app.get('/get-restaurant3', function(req,res){
  // console.log(Items)
  Restaurant.find({cat:"Briyani"},function(err,docs){
    if(err){
      console.log(err)
    }
    else{
      // console.log(docs)
      res.send(docs)
    }
  })
})

// Get items for veg catageory
app.get('/get-item', function(req,res){
  // console.log(Items)
  Item.find({cat:"Veg"},function(err,docs){
    if(err){
      console.log(err)
    }
    else{

      res.send(docs)
    }
  })
})

// Get items for Briyani catageory
app.get('/get-item2', function(req,res){
  // console.log(Items)
  Item.find({cat:"Non-Veg"},function(err,docs){
    if(err){
      console.log(err)
    }
    else{
      // console.log(docs)
      res.send(docs)
    }
  })
})

// Get items for Non-Veg catageory
app.get('/get-item3', function(req,res){
  Item.find({cat:"Briyani"},function(err,docs){
    if(err){
      console.log(err)
    }
    else{
      res.send(docs)
    }
  })
})


//get items into cart
app.post('/getitemdata', function(req,res){
  console.log(req.body)
  Item.find({'des':req.body.name}, function(err,docs){
    if(err){
      console.log(err)
    }
    else{
      console.log(docs)
      res.send(docs)
    }
  })
})

//get items into cart
app.post('/getitemdata2', function(req,res){
  console.log(req.body)
  Item.find({'des':req.body.name}, function(err,docs){
    if(err){
      console.log(err)
    }
    else{
      console.log(docs)
      res.send(docs)
    }
  })
})

//get items into cart
app.post('/getitemdata3', function(req,res){
  console.log(req.body)
  Item.find({'des':req.body.name}, function(err,docs){
    if(err){
      console.log(err)
    }
    else{
      console.log(docs)
      res.send(docs)
    }
  })
})
//manager 
app.get('/logoutm',function(req,res){
  res.sendFile(__dirname + '/manager/sites/index.html')
})
app.get('/logouta',function(req,res){
  res.sendFile(__dirname + '/Admin/sites/index.html')
})
//  Admin Restaurant data

 app.listen(8000, () => console.log("Successfully server started."));