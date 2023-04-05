import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import StyledSearchBar from './StyledSearchBar'
import PantryIngredient from './PantryIngredient'

const StyledPantryIngredientContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;

`

export default function PantryIngredientsSection(props) {
  const { pantry, handleAddPantryIngredient, handleDeletePantryIngredient } = props

  const [input, setInput] = useState('')

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleAddPantryIngredient(input)
    setInput('')
    document.getElementById('ingredientBar').value=''
  }

  return (
    <>
      <h4>Add additional pantry ingredients</h4>
      <form onSubmit={ handleSubmit }>
        <StyledSearchBar id='ingredientBar' onChange={ handleInputChange } height='2rem' width='100%' type="search" placeholder="Add an ingredient to the pantry" />
      </form>
      {pantry.length === 0 ?
        <div>Your pantry is empty.</div> :
        <StyledPantryIngredientContainer>
          { pantry.map((ingredient) => {
            return <PantryIngredient key={ ingredient } handleDeletePantryIngredient={ handleDeletePantryIngredient }>{ ingredient }</PantryIngredient>
          }) }
        </StyledPantryIngredientContainer>
      }
    </>
  )
}