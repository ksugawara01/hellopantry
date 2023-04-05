import React from 'react'
import styled from 'styled-components'
import RecipeCard from './RecipeCard.js'

const StyledSearchResults = styled.div`
  display: flex;
  flex-direction: column;
  ${ props => props.appColumnWidth }
  min-height: 95dvh;
  background: #F8F8FF;
`

export default function Recipes(props) {
  const { recipes, appColumnWidth } = props

  return (
    <StyledSearchResults appColumnWidth={appColumnWidth}>
      {
        recipes.length === 1 ?
          <h1>1 recipe found</h1> :
          <h1>{ recipes.length } recipes found</h1>
      }
      {recipes.map((recipe) => <RecipeCard key={ recipe.id } recipe={ recipe } />)}
    </StyledSearchResults>
  )
}
