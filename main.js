// Imports for packages
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const { grapeSeedRouter } = require('./controllers/grape_seed.js')
const cors = require('cors')


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


const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));


 // Set the port the server is to run on
const PORT = process.env.PORT || 8080 


//Starts the server
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})