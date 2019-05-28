const mongoose = require('mongoose');

// set up mongoDB connection
const mongoURL = 'mongodb+srv://admin:corgi@dt-uxtbr.mongodb.net/test?retryWrites=true';
const options = { useNewUrlParser: true };
mongoose.connect(mongoURL, options);
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

// db error handling
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
