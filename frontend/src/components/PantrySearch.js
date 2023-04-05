import React from 'react'
import styled from 'styled-components'

const StyledPantrySearchButton = styled.button`
  
`

export default function PantrySearch(props) {
  const { handlePantrySearch } = props
  return (
    <>
      <p>pantry search</p>
      <StyledPantrySearchButton onClick={ handlePantrySearch }>Search by Pantry</StyledPantrySearchButton>
    </>
  )
}