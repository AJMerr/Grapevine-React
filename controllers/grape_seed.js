const express = require('express')

//Imports the GrapeSeed API
const grapeSeedApi = require('../models/grapeSeed.js')

//Creates am Express router
const grapeSeedRouter = express.Router()


//AJAX requests for CRUD functions
//Gets all seeds
grapeSeedRouter.get('/grapevine', (req, res) => {
  grapeSeedApi.getAllSeeds() 
  .then((allSeeds) => {
    res.json(allSeeds)
  })
})

//Get a single seed
grapeSeedRouter.get('/grapevine/:id', (req, res) => {
  grapeSeedApi.getOneSeed(req.params.id)
  .then((oneSeed) =>{
    res.json(oneSeed)
  })
})

//Creates a seed
grapeSeedRouter.post('/grapevine', (req, res) => {
  grapeSeedApi.createSeed(req.body)
  .then((newSeed) =>{
    res.json(newSeed)
  })
})

//Updates a seed
grapeSeedRouter.put('/grapevine/:id', (req, res) => {
  grapeSeedApi.editSeed(req.params.id, req.body)
  .then((updateSeed) =>{
    res.json(updateSeed)
  })
})

//Deletes a seed 
grapeSeedRouter.delete('/grapevine/:id', (req, res) => {
  grapeSeedApi.deleteSeed(req.params.id)
  .then((deletedSeed) => {
    res.json(deletedSeed)
  })
})


//Exports the grapeSeed router
module.exports = {
  grapeSeedRouter
}