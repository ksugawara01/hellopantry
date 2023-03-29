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

  if (pantry.includes(children) && selected !== true) {
    setSelected(true)
  } else if (!pantry.includes(children) && selected !== false) {
    setSelected(false)
  }

  return(
    <StyledIngredientButton onClick={ () => handleIngredientClick(children) } selected={selected} >{ children }</StyledIngredientButton>
  )
}