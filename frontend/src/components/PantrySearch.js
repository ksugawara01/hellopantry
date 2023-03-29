import React from 'react'

export default function PantrySearch(props) {
  const { handlePantrySearch } = props
  return (
    <>
      <p>pantry search</p>
      <button onClick={ handlePantrySearch }>Search</button>
    </>
  )
}