const db = require('../models/fragranceModels');

const fragranceController = {};

// what do we want to be able to do?

// make an entry of a fragrance

// search for by name
fragranceController.displayName = (req, res, next) => {
    // make query to database
    // grab name off response body? deconstruct
    // console.log('made it to displayName controller');
    // req.query is coming up with an empty object?
    const { name } = req.params;
    // console.log(name);
    // console.log(req.params);
    db.Fragrance.find({ name: `${name}` })
        // db.Fragrance.find()
        .exec()
        .then((data) => {
            // console.log(data);
            res.locals.name = data;
            next();
        });
};
fragranceController.displayHouse = (req, res, next) => {
    // make query to database
    // grab name off response body? deconstruct
    // console.log('made it to displayHouse controller');
    // req.query is coming up with an empty object?
    const { house } = req.params;
    // console.log(name);
    // console.log(req.params);
    db.Fragrance.find({ house: `${house}` })
        // db.Fragrance.find()
        .exec()
        .then((data) => {
            console.log(data);
            res.locals.house = data;
            next();
        });
};
fragranceController.displayYear = (req, res, next) => {
    // make query to database
    // grab name off response body? deconstruct
    // console.log('made it to displayHouse controller');
    // req.query is coming up with an empty object?
    const { year } = req.params;
    // console.log(name);
    // console.log(req.params);
    db.Fragrance.find({ year: `${year}` })
        // db.Fragrance.find()
        .exec()
        .then((data) => {
            console.log(data);
            res.locals.year = data;
            next();
        });
};
fragranceController.displayNote = (req, res, next) => {
    // make query to database
    // grab name off response body? deconstruct
    // console.log('made it to displayHouse controller');
    // req.query is coming up with an empty object?
    const { note } = req.params;
    // console.log(name);
    // console.log(req.params);
    db.Fragrance.find({ notes: `${note}` })
        // db.Fragrance.find()
        .exec()
        .then((data) => {
            console.log(data);
            res.locals.note = data;
            next();
        });
};
// search for by notes?

// display fragrances
fragranceController.displayFragrances = (req, res, next) => {
    // want to display all, or according to what the search params are, like notes, house, year for whatever reason
    // make a query to the DB
    // this is ALL fragrances
    db.Fragrance.find()
        .exec()
        .then((data) => {
            res.locals.displayAll = data;
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

module.exports = fragranceController;
