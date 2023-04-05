import React from 'react'
import styled from 'styled-components'
import SingleIngredientSearch from './SingleIngredientSearch.js'
import PantrySection from './PantrySection.js'

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.appColumnWidth}
  min-height: 95dvh;

`

export default function Home(props) {
  const { handleSingleIngredientChange, handleSingleIngredientSearch, pantry, handleIngredientClick, handlePantrySearch, handleAddPantryIngredient, handleDeletePantryIngredient, appColumnWidth } = props

  return (
    <StyledHome appColumnWidth={ appColumnWidth }>
      <h1>Home</h1>
      <SingleIngredientSearch handleSingleIngredientChange={ handleSingleIngredientChange } handleSingleIngredientSearch={ handleSingleIngredientSearch } />
      <PantrySection pantry={ pantry } handleIngredientClick={ handleIngredientClick } handlePantrySearch={ handlePantrySearch } handleAddPantryIngredient={ handleAddPantryIngredient } handleDeletePantryIngredient={ handleDeletePantryIngredient } />
    </StyledHome>
  )
}
