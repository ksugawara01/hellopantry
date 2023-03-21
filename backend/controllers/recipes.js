const recipesRouter = require('express').Router()
const Recipe = require('../models/recipe')

// Display all recipes
recipesRouter.get('/', (request, response) => {
  Recipe.find({}).then(recipes => {
    response.json(recipes)
  })
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
  console.log('first test')
  recipe.save()
    .then(savedRecipe => {
      console.log('testing if this is seen')
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

module.exports = recipesRouter
