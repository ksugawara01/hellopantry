import React from 'react'
import SingleIngredientSearch from './SingleIngredientSearch.js'
import PantrySearch from './PantrySearch.js'
import PantryStaplesSection from './PantryStaplesSection.js'
import AdditionalIngredientsSection from './AdditionalIngredientsSection.js'


export default function Home(props) {
  const {} = props

  return (
    <div>
      <h1>Home</h1>
      <SingleIngredientSearch />
      <PantryStaplesSection />
      <AdditionalIngredientsSection />
      <PantrySearch />
    </div>
  )
}