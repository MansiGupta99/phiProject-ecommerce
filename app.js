const express = require("express");
const app = express();
require("dotenv/config");
//const passport = require("passport");
var bodyparser = require("body-parser");
var path = require('path')

const  userRoutes = require("./routes/userRoutes");
const { database } = require("./models/modelExport");
const sequelize = require("./models/config");
database.sequelize.sync();  //create the database if it is not present.

app.use(express.static(path.join(__dirname, '/')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
app.use('/js',express.static(__dirname+'public/js'))
app.use('/fonts',express.static(__dirname+'public/fonts'))
app.use('/images',express.static(__dirname+'public/images'))
app.use('/plugins',express.static(__dirname+'public/plugins'))
//app.use("/api", userRoutes);


app.set('view engine', 'ejs')
app.use("/", userRoutes);

// app.get('/register',(req,res)=>{
//     return res.render('register',{message : 'null'}) 
// });
// app.post('/register',async (req,res)=>{
//     // const user = new User(req.body)
//     // await user.save() 
//     return res.render('register',{ message : "Registration successful !!"}) 
// });

app.get('/cart',(req,res)=>{
    return res.render('cart') 
});

app.get('/clp',(req,res)=>{
    return res.render('catalog-list-page') 
});

app.get('/checkout',(req,res)=>{
    return res.render('checkout') 
});

app.get('/index',(req,res)=>{
    return res.render('index') 
});

app.get('/pd',(req,res)=>{
    return res.render('product-detail') 
});

 
app.listen(3000,console.log('Server running on PORT : 3000'))

