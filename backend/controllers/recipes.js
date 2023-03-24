const recipesRouter = require('express').Router()
const Recipe = require('../models/recipe')

// Display all recipes
recipesRouter.get('/', (request, response, next) => {
  Recipe.find({})
    .then(recipes => {
      response.json(recipes)
    })
    .catch(error => next(error))
})

// Display recipe by id
recipesRouter.get('/:id', (request, response, next) => {
  Recipe.findById(request.params.id)
    .then(recipe => {
      if (recipe) {
        response.json(recipe)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

// Display all recipe that contain an ingredient
recipesRouter.get('/singleingredientsearch/:ingredient', (request, response, next) => {
  Recipe.find({ recipeIngredient: { $regex: new RegExp(request.params.ingredient, 'i') } })
    .then(recipes => {
      response.json(recipes)
    })
    .catch(error => next(error))
})

// Display all recipes that can be made with the pantry ingredients
recipesRouter.get('/pantrySearch/:pantry', (request, response, next) => {
  let pantry = request.params.pantry
  console.log('pantry', pantry)
  pantry = pantry.split(',')
  console.log('pantry array?', pantry)
  // Create array of regular expressions
  pantry = pantry.map(ingredient => {
    return new RegExp(ingredient, 'i')
  })
  // Finds every recipe where the recipeIngredient array only contains items that match with the pantry regex array
  Recipe.find({ recipeIngredient: { $not: { $elemMatch: { $nin: pantry } } } })
    .then(recipes => {
      response.json(recipes)
    })
    .catch(error => next(error))
})

// Add new recipe
recipesRouter.post('/', (request, response, next) => {
  const body = request.body

  const recipe = new Recipe({
    name: body.name,
    description: body.description,
    calories: body.calories,
    carbohydrateContent: body.carbohydrateContent,
    proteinContent: body.proteinContent,
    fatContent: body.fatContent,
    sugarContent: body.sugarContent,
    recipeIngredient: body.recipeIngredient,
    totalTime: body.totalTime,
    thumbnailUrl: body.thumbnailUrl,
    url: body.url
  })
  recipe.save()
    .then(savedRecipe => {
      response.json(savedRecipe)
    })
    .catch(error => next(error))
})

// Delete recipe by id
recipesRouter.delete('/:id', (request, response, next) => {
  Recipe.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

// Update recipe by id
recipesRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const recipe = {
    name: body.name,
    description: body.description,
    calories: body.calories,
    carbohydrateContent: body.carbohydrateContent,
    proteinContent: body.proteinContent,
    fatContent: body.fatContent,
    sugarContent: body.sugarContent,
    recipeIngredient: body.recipeIngredient,
    totalTime: body.totalTime,
    thumbnailUrl: body.thumbnailUrl,
    url: body.url
  }

  Recipe.findByIdAndUpdate(request.params.id, recipe, { new: true })
    .then(updatedRecipe => {
      response.json(updatedRecipe)
    })
    .catch(error => next(error))
})

// temp
/*
recipesRouter.put('/removesaltandpepper/:id', (request, response, next) => {

  const body = request.body
  Recipe.updateMany(
    {},
    { $pull: { recipeIngredient: { $in: ['Kosher Salt', 'Pepper'] } } }
  )
    .then(thing => response.json(thing))
    .catch(error => next(error))
})*/

module.exports = recipesRouter
