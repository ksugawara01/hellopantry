import React from 'react'
import styled from 'styled-components'

const StyledLogoutButton = styled.button`

`

export default function LogoutButton(props) {
  const { children, handleLogout } = props

  return (
    <StyledLogoutButton onClick={ handleLogout }>{ children }</StyledLogoutButton>
  )
}