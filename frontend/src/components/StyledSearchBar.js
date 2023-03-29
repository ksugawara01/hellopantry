import styled from 'styled-components'

const StyledSearchBar = styled.input`
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: ${props => props.height};
  font-size: 100%;
  padding-left: 1em;
`

export default StyledSearchBar
