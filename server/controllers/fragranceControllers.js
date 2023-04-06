const db = require('../models/fragranceModels');

const fragranceController = {};

// what do we want to be able to do?

// make an entry of a fragrance

// search for by name
// fragranceController.displayName = (req, res, next) => {
//     // make query to database
//     // grab name off response body? deconstruct
//     const { name } = req.body;
//     db.Fragrance.find({ name: name })
//         .exec()
//         .then((data) => {
//             res.locals = data;
//             next();
//         });
// };
// search for by house
// fragranceController.displayHouse = (req, res, next) => {
//     // make query to database
//     // grab name off response body? deconstruct
//     const { house } = req.body;
//     db.Fragrance.find({ house: house })
//         .exec()
//         .then((data) => {
//             res.locals = data;
//             next();
//         });
// };
// search for by year
// fragranceController.displayYear = (req, res, next) => {
//     // make query to database
//     // grab name off response body? deconstruct
//     const { year } = req.body;
//     db.Fragrance.find({ year: year })
//         .exec()
//         .then((data) => {
//             res.locals = data;
//             next();
//         });
// };
// search for by notes?

// display fragrances
fragranceController.displayFragrances = (req, res, next) => {
    // want to display all, or according to what the search params are, like notes, house, year for whatever reason
    // make a query to the DB
    // this is ALL fragrances
    db.Fragrance.find()
        .exec()
        .then((data) => {
            res.locals = data;
            next();
        });
    // res.send('this is from displayfragrances');
};

fragranceController.storeFragrance = (req, res, next) => {
    // want to add another instance of a fragrance to database
    // will be a post request
    // req body will have all the things, so destructure it and save to res.locals?
    console.log('made it to storeFragrance');
    const { name, house, year, notes, comments } = req.body;

    const newFragrance = new db.Fragrance({
        name,
        house,
        year,
        notes,
        comments,
    });
    newFragrance.save().then((data) => {
        res.locals = data;
        next();
    });
    // need error handling
    // return next();
};

fragranceController.sayHi = (req, res, next) => {
    console.log('hi from hi controller');
    next();
};
module.exports = fragranceController;
