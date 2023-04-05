import React from 'react'
import styled from 'styled-components'
import IngredientButton from './IngredientButton'

const StyledPantryStaplesSection = styled.div`
  display: flex;
  flex-direction: column;
  max-height: ${ props => props.isOpen ? '1000px' : '0px' };
  overflow: hidden;
  transition: max-height 0.5s ease-out;
`
const StyledButtonSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default function PantryStaplesSection(props) {
  const { pantry, handleIngredientClick, isOpen } = props

  console.log('isOpen', isOpen)

  return (
    <StyledPantryStaplesSection isOpen={ isOpen }>
      <p>Quickly add and remove pantry staples by pressing the buttons.</p>
      <h4>Basics</h4>
      <StyledButtonSection>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Oil</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Vinegar</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Flour</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Corn Starch</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Rice</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Bread</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Tortilla</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Pasta</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Spaghetti</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Peanut Butter</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Maple Syrup</IngredientButton>
      </StyledButtonSection>
      <h4>Meat and Seafood</h4>
      <StyledButtonSection>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Beef</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Pork</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Chicken</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Bacon</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Tuna</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Cod</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Tilapia</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Catfish</IngredientButton>
      </StyledButtonSection>
      <h4>Produce</h4>
      <StyledButtonSection>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Potato</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Onion</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Garlic</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Carrot</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Tomato</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Lemon</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Lime</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Avocado</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Bell Pepper</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Broccoli</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Cauliflower</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Spinach</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Cilantro</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Parsley</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Scallion</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Ginger</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Lettuce</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Kale</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Celery</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Apple</IngredientButton>
      </StyledButtonSection>
      <h4>Dairy</h4>
      <StyledButtonSection>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Egg</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Milk</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Butter</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Cheese</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Sour Cream</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Yogurt</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Heavy Cream</IngredientButton>
      </StyledButtonSection>
      <h4>Spices</h4>
      <StyledButtonSection>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Garlic Powder</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Onion Powder</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Cayenne Pepper</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Chili Powder</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Chili Flakes</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Cinnamon</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Cumin</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Paprika</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Rosemary</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Curry Powder</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Nutmeg</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Garam Masala</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Sesame Seeds</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Oregano</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Fennel Seeds</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Cajun Spice Blend</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Southwest Spice Blend</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Italian Seasoning</IngredientButton>
      </StyledButtonSection>
      <h4>Sauces and Condiments</h4>
      <StyledButtonSection>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Mayonnaise</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Ketchup</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Mustard</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Soy Sauce</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Hot Sauce</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Fish Sauce</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Pickles</IngredientButton>
      </StyledButtonSection>
      <h4>Stock</h4>
      <StyledButtonSection>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Concentrated Chicken Stock</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Concentrated Beef Stock</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Concentrated Veggie Stock</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Concentrated Mushroom Stock</IngredientButton>
        <IngredientButton pantry={ pantry } handleIngredientClick={ handleIngredientClick } >Concentrated Seafood Stock</IngredientButton>
      </StyledButtonSection>
    </StyledPantryStaplesSection>
  )
}