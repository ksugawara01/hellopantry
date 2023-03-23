import React from 'react'
import { useState } from 'react'
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

import recipeService from './services/recipes'

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
  justify-content: flex-end;
  //border: 2px solid red;
  background-color: lightpink;
`

const StyledLink = styled(Link)`
  padding: 8px;
`

function App() {

  // State for the string in the single ingredient search bar
  const [singleIngredient, setSingleIngredient] = useState('')
  // State for the list of recipes that will be displayed from a search
  const [recipes, setRecipes] = useState([])

  const navigate = useNavigate()

  const handleSingleIngredientSearch = (event) => {
    event.preventDefault()
    navigate('/SearchResults')
    recipeService.singleIngredientSearch(singleIngredient)
      .then(recipes => {
        setRecipes(recipes)
        console.log('set recipes')
        console.log(recipes)
      })
  }

  const handleSingleIngredientChange = (event) => {
    setSingleIngredient(event.target.value)
    console.log('single ingredient', singleIngredient)
  }

  return (
    <StyledApp>
      <StyledHeader>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/login'>Login</StyledLink>
        <StyledLink to='/signup'>Sign Up</StyledLink>
        <StyledLink to='/searchresults'>search results</StyledLink>
      </StyledHeader>
      <Routes>
        <Route path='/' element={ <Home handleSingleIngredientChange={ handleSingleIngredientChange } handleSingleIngredientSearch={ handleSingleIngredientSearch } appColumnWidth={ appColumnWidth }/> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/searchresults' element={ <SearchResults recipes={ recipes } singleIngredient={ singleIngredient } appColumnWidth={ appColumnWidth } /> } />
        <Route path='/signup' element={ <SignUp /> } />
      </Routes>
      <Footer />
    </StyledApp>
  )
}

export default App
