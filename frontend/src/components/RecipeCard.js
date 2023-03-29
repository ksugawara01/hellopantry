import React from 'react'
import styled from 'styled-components'

const StyledRecipeCard = styled.a`
display: flex;
flex-direction: row;
color: black;
text-decoration: none;
//max-height: 10rem;
//min-height: 2rem;
padding: 5px;
margin: 3px;
background: white;
box-shadow: .5rem .5rem .5rem lightgray;
//border: 1px solid lightgray;
`
/*
const StyledThumbnailLink = styled.a`
display: flex;
width: 25%;
flex-shrink: 0;
height: auto;
border: 2px solid green;
`*/
const StyledThumbnail = styled.img`
width: 25%;
height: auto;
object-fit: scale-down;
`
const StyledInfo = styled.div`
display: flex;
flex-direction: column;
margin-left: 15px;
//border: 2px solid brown;
`
const StyledName = styled.div`
font-size: 1.5rem;
font-weight: bold;
@media (max-width: 35rem) {
    font-size: 1rem;
  }
`
const StyledNutrition = styled.div`
display: flex;
flex-direction: row;
color: darkgray;
margin-top: 2px;
margin-bottom: 5px;
@media (max-width: 35rem) {
  font-size: .75rem;
}
@media (max-width: 25rem) {
    display:none;
  }
`
const StyledDescription = styled.div`
  // Remove the recipe description if the width is less than the threshhold
  @media (max-width: 50rem) {
    display:none;
  }
`

export default function RecipeCard(props) {
  const { recipe } = props

  return (
    <StyledRecipeCard href={ recipe.url }>
      <StyledThumbnail src={ recipe.thumbnailUrl } alt='Recipe Thumbnail' />
      <StyledInfo>
        <StyledName href={ recipe.url }>{ recipe.name }</StyledName>
        <StyledNutrition>Calories: { recipe.calories }kcal  Fat: { recipe.fatContent }g  Carbs: { recipe.carbohydrateContent }g  Protein: { recipe.proteinContent }g  Time: { recipe.totalTime } minutes</StyledNutrition>
        <StyledDescription>{ recipe.description }</StyledDescription>
      </StyledInfo>
    </StyledRecipeCard>
  )
}
