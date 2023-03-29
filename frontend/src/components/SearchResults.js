import React from 'react'
import styled from 'styled-components'
import RecipeCard from './RecipeCard.js'

const StyledSearchResults = styled.div`
  display: flex;
  flex-direction: column;
  ${ props => props.appColumnWidth }
  min-height: 95dvh;
  background: #F8F8FF;
  //border: 2px solid red;
`

export default function Recipes(props) {
  const { recipes, singleIngredient, appColumnWidth } = props

  return (
    <StyledSearchResults appColumnWidth={appColumnWidth}>
      <h1>{ recipes.length } recipes containing { singleIngredient }</h1>
      {recipes.map((recipe) => <RecipeCard key={ recipe.id } recipe={ recipe } />)}
    </StyledSearchResults>
  )
}
