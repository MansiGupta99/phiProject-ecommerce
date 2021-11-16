const express = require('express')
const router = express.Router()
const db = require('../models/modelExport');
const User = db.database.user;

router.get('/register',(req,res)=>{
    return res.render('register', {message : ''}) 
});

router.post("/register", async(req,res)=>{
     
    try {
        // firstName1 =  req.body.firstName,
        // lastName1 = req.body.lastName,
        // email1 = req.body.email,
        // gender1 =  req.body.gender,
        // password1= req.body.password,
        // city1 = req.body.city,
        // country1= req.body.country
        console.log(req.body);
        const user = await User.create(req.body)
            // firstName : firstName1,
            // lastName : lastName1,
            // email : email1,
            // gender : gender1,
            // password : password1,
            // city:city1
            //country:country});
        ;
        if(user)
        {
            return res.render('register',{ message : "Registration successful !!"}) 
        }
        console.log('success' );
    } catch (err) {
        
        return res.render('register',{ message : "Something went wrong"}) 
    }
});

module.exports = router;