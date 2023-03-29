import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const StyledIngredientButton = styled.button`
  margin: 2px;
  padding: 5px;
  border-radius: 0.5rem;
  color: ${props => props.selected ? 'white' : 'black'};
  font-weight: bold;
  background-color: ${props => props.selected ? 'seagreen' : '#FAF0E6'};
`

export default function IngredientButton(props) {
  const { children, pantry, handleIngredientClick } = props

  const [selected, setSelected] = useState(false)

  const lowerCasePantry = pantry.map((ing) => ing.toLowerCase())

  const ingredient = children.toLowerCase()

  if (lowerCasePantry.includes(ingredient) && selected !== true) {
    setSelected(true)
  } else if (!lowerCasePantry.includes(ingredient) && selected !== false) {
    setSelected(false)
  }

  return(
    <StyledIngredientButton onClick={ () => handleIngredientClick(children) } selected={selected} >{ children }</StyledIngredientButton>
  )
}