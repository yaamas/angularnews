// require('rootpath')();
const express = require('express')

const app = express();

const cors = require('cors')

// import { urlencoded, json } from 'body-parser';

// app.use(urlencoded({ extended: false }));
// app.use(json());
app.use(cors());

// api routes
app.use('/news', require('./app.controller'));

// start server
if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 4000;
    const server = app.listen(port, function () {
        console.log('Server listening on port ' + port);
    });
}

module.exports = app;