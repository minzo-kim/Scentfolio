const path = require('path');
const express = require('express');

const app = express();

const apiRouter = require('./routes/api');

const PORT = 3000;
/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//
//
//
// handles calls from the front end
app.use('/api', apiRouter);
app.get('/', apiRouter);

// start server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
