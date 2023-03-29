import axios from 'axios'
const baseUrl = '/api/users'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getPantry = async () => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.get(`${baseUrl}/pantry`, config)
  return response.data
}

const updatePantry = async (newObject) => {
  // Sets the value of authorization header to the value of token
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.put(`${baseUrl}/pantry`, newObject, config)
  return response.data
}

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

export default { getPantry, updatePantry, create, setToken }