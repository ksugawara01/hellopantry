import React from 'react'
import styled from 'styled-components'
import SingleIngredientSearch from './SingleIngredientSearch.js'
//import PantrySearch from './PantrySearch.js'
//import PantryStaplesSection from './PantryStaplesSection.js'
//import AdditionalIngredientsSection from './AdditionalIngredientsSection.js'

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.appColumnWidth}
  min-height: 95dvh;
  border: 2px solid red;

`

export default function Home(props) {
  const { handleSingleIngredientChange, handleSingleIngredientSearch, appColumnWidth } = props

  return (
    <StyledHome appColumnWidth={ appColumnWidth }>
      <h1>Home</h1>
      <SingleIngredientSearch handleSingleIngredientChange={ handleSingleIngredientChange } handleSingleIngredientSearch={ handleSingleIngredientSearch } />
      {/*<PantryStaplesSection />
      <AdditionalIngredientsSection />
      <PantrySearch />*/}
    </StyledHome>
  )
}