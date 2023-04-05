import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import PantrySearch from './PantrySearch.js'
import PantryStaplesSection from './PantryStaplesSection.js'
import PantryIngredientsSection from './PantryIngredientsSection.js'

const StyledPantrySection = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledCollapseButton = styled.button`
  display: flex;
  font-size: 24px;
  font-weight: bold;
  align-self: flex-start;
  background-color: transparent;
  margin-top: 2rem;
  border: none;
  cursor: pointer;


`

export default function PantrySection(props) {
  const { pantry, handleIngredientClick, handlePantrySearch, handleAddPantryIngredient , handleDeletePantryIngredient } = props

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <StyledPantrySection>
      <PantrySearch handlePantrySearch={ handlePantrySearch }/>
      <StyledCollapseButton onClick={toggleOpen}>{ isOpen ? 'Pantry Staples     -' : 'Pantry Staples     +' }</StyledCollapseButton>
      {<PantryStaplesSection pantry={ pantry } handleIngredientClick={ handleIngredientClick } isOpen={ isOpen }/>}
      <PantryIngredientsSection pantry={ pantry } handleAddPantryIngredient={ handleAddPantryIngredient } handleDeletePantryIngredient={ handleDeletePantryIngredient }/>
    </StyledPantrySection>
  )
}