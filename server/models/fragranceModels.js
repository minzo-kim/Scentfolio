const mongoose = require('mongoose');

// our specific cluster
const db_uri =
    'mongodb+srv://minzokim:birdhouse43@cluster0.ddxk5fc.mongodb.net/?retryWrites=true&w=majority';

// need to connect
mongoose
    .connect(db_uri, {
        // options for the connect method to parse the URI
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // sets the name of the DB that our collections are part of
        dbName: 'fragrances',
    })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const fragranceSchema = new Schema({
    // put in which ones are required
    name: { type: String, required: true },
    house: { type: String, required: true },
    year: Number,
    notes: Array,
    comments: String,
});

// can create collection, will pluralize the name to fragrances

const Fragrance = mongoose.model('fragrance', fragranceSchema);

module.exports = {
    Fragrance,
};
