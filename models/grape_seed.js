const mongoose = require ("./connection.js")

//Schema for the global post API
const GrapeSeedSchema = new mongoose.Schema({
    seed: String,
    created_at: Date
})

//Collection for SEeds 
const GrapeSeedCollection = mongoose.model("grape_seed", GrapeSeedSchema)

//CRUD functions
//Get all grapeSeeds
const getAllSeeds = () => {
    return GrapeSeedCollection.find()
  }
  
  //Gets a single seed
  const getOneSeed = (seedId) => {
    return GrapeSeedCollection.findById(seedId)
  }
  
  //Creates a new seed
  const createSeed = (newSeed) => {
    return GrapeSeedCollection.create(newSeed)
  }
  
  //Edits a single existing seed
  const editSeed = (seedId, updateSeed) => {
    return GrapeSeedCollection.updateOne({_id: seedId}, updateSeed)
  }
  
  //Deletes a single seed
  const deleteSeed = (seedId) => {
    return GrapeSeedCollection.deleteOne({_id: seedId})
  }
  
  
  //Exports all fuctions for the grapeSeed model
  module.exports = {
    getAllSeeds,
    getOneSeed,
    createSeed,
    deleteSeed,
    editSeed
  }