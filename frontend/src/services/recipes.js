import axios from 'axios'

const baseUrl = '/api/recipes'

// Return the recipe that contains the id
const get = (id) => {
  const request = axios.get(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

// Return all recipes that contain the ingredient
const singleIngredientSearch = (ingredient) => {
  const request = axios.get(`${baseUrl}/SingleIngredientSearch/${ingredient}`)
  return request.then(response => response.data)
}

// Return all recipes that only contain pantry ingredients
const pantrySearch = (pantry) => {
  const request = axios.get(`${baseUrl}/pantrySearch/${pantry}`)
  return request.then(response => response.data)
}

// Return all recipes
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

// Create a new recipe
const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

// Update a recipe
const update = (id, newObject) => {
  return(axios.put(`${baseUrl}/${id}`, newObject))
}

// Delete a recipe
const deleteRecipe = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

export default { get, singleIngredientSearch, pantrySearch, getAll, create, update, deleteRecipe }
