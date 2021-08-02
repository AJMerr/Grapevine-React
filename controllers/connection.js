// Imports the module
const mongoose = require('mongoose');


// Creates a Mongo Database
const connectionString = process.env.MONGODB_URI || "mongodb://localhost/grapevine";


// Opens up a connection to the MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true})
  .then(() => {
    console.log("connected to mongo at: " + connectionString);
  });


// Imports mongoose
module.exports = mongoose