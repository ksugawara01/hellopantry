import React from 'react'
import StyledSearchBar from './StyledSearchBar'

export default function SingleIngredientSearch(props) {
  const { handleSingleIngredientChange, handleSingleIngredientSearch } = props

  return (
    <>
      <p>single ingredients search</p>
      <form onSubmit={ handleSingleIngredientSearch }>
        <StyledSearchBar onChange={ handleSingleIngredientChange } height='2rem' width='100%' type="search" placeholder="Search for recipes using a single ingredient" />
      </form>
    </>
  )
}
