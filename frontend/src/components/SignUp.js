import React from 'react'

export default function SignUp(props) {
  const { handleSignUp, username, password, handleUsernameChange, handlePasswordChange } = props
  return (
    <form onSubmit={handleSignUp}>
      <div>
        username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={ handleUsernameChange }
        />
      </div>
      <div>
        password
        <input
          type="password"
          value={password}
          name="Password"
          onChange={ handlePasswordChange }
        />
      </div>
      <button type="submit">login</button>
    </form>
  )
}
