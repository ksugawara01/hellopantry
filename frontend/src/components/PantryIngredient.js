import React from 'react'
import styled from 'styled-components'
import trash from '../images/trash-can.png'

const StyledPantryIngredient = styled.div`
  display: flex;
  justify-content: space-between;
  width: 14rem;
  height: 2rem;
  margin: 5px;
  //border: 2px solid grey;
  border-bottom: 2px solid lightgrey;
`

const StyledTrash = styled.img`
  height: 75%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export default function PantryIngredient(props) {
  const { children, handleDeletePantryIngredient } = props

  return (
    <StyledPantryIngredient>
      <div>{ children }</div>
      <StyledTrash src={ trash } onClick={ () => handleDeletePantryIngredient(children) } />
    </StyledPantryIngredient>
  )
}