import React from 'react'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Recipes from './components/Recipes'
import SignUp from './components/SignUp'

function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign Up</Link>
      </div>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/recipes' element={ <Recipes /> } />
        <Route path='/signup' element={ <SignUp /> } />
      </Routes>
    </Router>
  )
}

export default App
