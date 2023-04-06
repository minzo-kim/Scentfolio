const express = require('express');
const fragranceController = require('../controllers/fragranceControllers');
// const DisplayName = require();

const router = express.Router();

// router.get('/hi', fragranceController.sayHi, (req, res) => {
//     console.log('hi test ');
//     res.send('hello test');
// });

// there's a problem with my api routes.
// "Error: Route.get() requires a callback function but got a [object Undefined]"

router.get('/name', fragranceController.displayName, (req, res) => {
    console.log('succesfully found the /name router');
    res.status(200).json(res.locals);
});
// router.get('/year', fragranceController.displayYear, (req, res) => {
//     console.log('succesfully found the /year router');
//     res.status(200).json(res.locals);
// });

// *************************** THESE DOWN HERE WORK********************************
// a post request to add to database collection
// fragrancecontroller store fragrances
router.post('/store', fragranceController.storeFragrance, (req, res) => {
    // send back a response.
    res.status(200).json(res.locals);
});

// a get request to display all fragrances
// fragrancecontroller display fragrances
// localhost8080/api/display
router.get('/display', fragranceController.displayFragrances, (req, res) => {
    // send back a response.
    console.log('succesfully found the /display router');
    res.status(200).json(res.locals);
    // res.send('this is fro display controller');
});
router.get('/', (req, res) => {
    console.log('hi testing');
});

module.exports = router;
