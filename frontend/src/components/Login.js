import React from 'react'

export default function Login(props) {
  const { handleLogin, username, password, handleUsernameChange, handlePasswordChange } = props
  return (
    <form onSubmit={handleLogin}>
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
