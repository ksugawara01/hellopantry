import React from 'react'

export default function SingleIngredientSearch(props) {
  const { handleSubmit } = props

  return (
    <>
      <p>single ingredients search</p>
      <form onSubmit={handleSubmit}>
        <>
          <input type="text" placeholder="Single Ingredient Search" />
          <button type="submit" value="Submit" >Search</button>
        </>
      </form>
    </>
  )
}