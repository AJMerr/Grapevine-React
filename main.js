// Imports for packages
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const { grapeSeedRouter } = require('./controllers/grape_seed.js')


// Middleware registration
// Parses through the body of the HTTP requests from a URL encoded string 
app.use(express.urlencoded({extended: true}))


 // Parses through the body of the HTTP requests from a JSON string  
app.use(express.json())


 //add method-override middleware for "faking" DELETE and PUT/PATCH requests 
app.use(methodOverride('_method'))


//Creates routers for the application, first arguement is the path
app.use('/api/', grapeSeedRouter)


 //Uses the client/build directory to host CSS and images
 app.use(express.static(`${__dirname}/client/build`))


 // Set the port the server is to run on
const PORT = process.env.PORT || 8080 


//Starts the server
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})