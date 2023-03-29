import React from 'react'
import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import {
  //BrowserRouter as Router,
  Routes, Route, Link, useNavigate
} from 'react-router-dom'

//import recipeService from './services/recipes.js'

import Home from './components/Home'
import Login from './components/Login'
import SearchResults from './components/SearchResults'
import SignUp from './components/SignUp'
import Footer from './components/Footer'
import LogoutButton from './components/LogoutButton'

import recipeService from './services/recipes'
import loginService from './services/login'
import userService from './services/users'

import logo from './images/logo-no-background.svg'

const appColumnWidth = css`
  max-width: 60rem;
  min-width: 20rem;
  width: 100%;
  background-color: white;
  //margin: 0px;
  @media (min-width: 50rem) {
    padding-left: 75px;
    padding-right: 75px;
  }
`

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100dvh;
  //margin: 0px;
  //padding: 0px;
  //border: 2px solid red;
  background-color: lightgray;
`

const StyledHeader = styled.div`
  ${appColumnWidth}
  display: flex;
  height: 5rem;
  justify-content: space-between;
  //border: 2px solid red;
  background-color: white;
`
const StyledLogo = styled.img`
  margin-right: 100px;
  height: 100%;
`

const StyledLink = styled(Link)`
  padding: 8px;
`

function App() {

  //States for the input field strings
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [singleIngredient, setSingleIngredient] = useState('')

  const [user, setUser] = useState(null)

  // State for the list of recipes that will be displayed from a search
  const [recipes, setRecipes] = useState([])

  const [pantry, setPantry] = useState(['Garlic'])

  //useEffect
  //If user is logged in then set pantry to the user pantry
  //If user is not logged in then set it to whatever is saved to the localstorage if anything is saved
  //otherwise set it to an empty array

  // Keep user logged in
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedHelloPantryUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      console.log('what is user', user)
      setUser(user)
      userService.setToken(user.token)
    }
  }, [])

  useEffect(() => {
    console.log('user', user)
    if (user !== null) {
      console.log('getting pantry')
      userService.getPantry()
        .then(pantry => {
          console.log('pantry', pantry)
          setPantry(pantry)
        })
    } else {
      setPantry([])
    }
  }, [user])
  /*
  // Update user pantry database when pantry changes
  useEffect(() => {

  }, [pantry])
  */
  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedHelloPantryUser', JSON.stringify(user)
      )
      userService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      navigate('/')
    } catch (exception) {
      alert('Wrong credentials')
    }
  }

  const handleSignUp = async (event) => {
    event.preventDefault()
    userService.create({
      username: username,
      password: password,
      pantry: []
    })
      .then(
        navigate('/')
      )
  }

  const handleSingleIngredientSearch = (event) => {
    event.preventDefault()
    navigate('/searchresults')
    recipeService.singleIngredientSearch(singleIngredient)
      .then(recipes => {
        setRecipes(recipes)
        console.log('set recipes')
        console.log(recipes)
      })
  }

  const handlePantrySearch = () => {
    navigate('/searchresults')
    recipeService.pantrySearch(pantry)
      .then(recipes => {
        setRecipes(recipes)
        console.log('recipes', recipes)
      })
  }

  // If an IngredientButton is clicked it will add or remove the ingredient from the pantry
  const handleIngredientClick = (ingredient) => {
    // Remove ingredient
    if (pantry.includes(ingredient)) {
      const updatedPantry = pantry.filter(ing => ing !== ingredient)
      if (user !== null) {
        userService.updatePantry(updatedPantry)
      }
      setPantry(updatedPantry)
    // Add ingredient
    } else {
      const updatedPantry = pantry.concat(ingredient)
      if (user !== null) {
        userService.updatePantry(updatedPantry)
      }
      setPantry(updatedPantry)
    }
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedHelloPantryUser')
    setUser(null)
    userService.setToken(null)
    //might need to set token???
  }

  // Handles changes to input fields
  const handleSingleIngredientChange = (event) => {
    setSingleIngredient(event.target.value)
  }
  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <StyledApp>
      <StyledHeader>
        <StyledLink to='/'><StyledLogo src={logo} alt='logo' /></StyledLink>
        <div>
          {user === null ?
            <StyledLink to='/login'>Login</StyledLink> :
            <div>Hello { user.username }</div>
          }
          {user === null ?
            <StyledLink to='/signup'>Sign Up</StyledLink> :
            <LogoutButton handleLogout={ handleLogout }>Logout</LogoutButton>
          }
        </div>
      </StyledHeader>
      <Routes>
        <Route path='/' element={ <Home handleSingleIngredientChange={ handleSingleIngredientChange } handleSingleIngredientSearch={ handleSingleIngredientSearch } pantry={ pantry } handlePantrySearch={ handlePantrySearch } handleIngredientClick={ handleIngredientClick } appColumnWidth={ appColumnWidth }/> } />
        <Route path='/login' element={ <Login handleLogin={ handleLogin } handleUsernameChange={ handleUsernameChange } handlePasswordChange={ handlePasswordChange } /> } />
        <Route path='/searchresults' element={ <SearchResults recipes={ recipes } singleIngredient={ singleIngredient } appColumnWidth={ appColumnWidth } /> } />
        <Route path='/signup' element={ <SignUp handleSignUp={ handleSignUp } handleUsernameChange={ handleUsernameChange } handlePasswordChange={ handlePasswordChange } /> } />
      </Routes>
      <Footer />
    </StyledApp>
  )
}

export default App
