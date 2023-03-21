const mongoose = require('mongoose')

// Schema for the recipe objects
const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  calories: Number,
  carbohydrateContent: Number,
  proteinContent: Number,
  fatContent: Number,
  sugarContent: Number,
  recipeIngredient: [{
    type: String
  }],
  totalTime: Number,
  thumbnailUrl: String,
  url: String
})

recipeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Recipe', recipeSchema)
