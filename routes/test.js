const express = require("express");
const app = express();
var path = require("path");
var router = express.Router();
const db = require('../models/modelExport');
const User = db.database.user;

const testFunction = async () => {

        // const data = User.build({
        //     firstName: 'Seema',
        //     lastName: 'Gupta',
        //     email: 's@gmail.com',
        //     gender: 'Female',
        //     password: '147',
        //     city: 'fzd',
        //     country: 'india',
        // });

        // const data = await User.findAll({
        //     where: {
        //         email: 'mansigupt379@gmail.com'
        //     }
        //   });

//         const data = await User.create({
//             firstName: 'Mayuri',
//             lastName: 'Gupta',
//             email: 'm@gmail.com',
//             gender: 'Female',
//             password: '7896',
//             city: 'fzd',
//             country: 'india',
//         });
//         console.log(data);
// 
        try {
            const user = await User.create({
                            firstName: 'Mamta',
                            lastName: 'Gupta',
                            email: 'mamta@gmail.com',
                            gender: 'Female',
                            password: '212',
                            city: 'Delhi',
                            country: 'India',
                        });
            // you can now access the newly created user
            console.log(user );
            console.log('success' );
        } catch (err) {
            // print the error details
            console.log(err);
        }
}
testFunction();