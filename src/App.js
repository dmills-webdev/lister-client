import React, { useState } from 'react'
import { BrowserRouter, NavLink, Route, useHistory }from 'react-router-dom'

import Signup from './Signup'
import Login from './Login'
import Todos from './Todos'

import "./scss/App.scss"

function App() {
  let history = useHistory()

  // Log current user out
  function logout() {
    fetch('/logout')
    .then(
      history.push('/login')
    )
  }

  return(
    <BrowserRouter>
      <div>

        <header>
          <div className='logo'>
            Lister
          </div>
        </header>

        <div onClick={logout}>
          Logout
        </div>

        <NavLink
          to='/signup' exact
          activeClassName='activeLink'
          className='nav-item'>
            Signup
        </NavLink>

        <NavLink
          to='/login' exact
          activeClassName='activeLink'
          className='nav-item'>
            Login
        </NavLink>

        <NavLink
          to='/' exact
          activeClassName='activeLink'
          className='nav-item'>
            Todos
        </NavLink>

        <main>
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Todos} />
        </main>

      </div>
    </BrowserRouter>
  )
}

export default App
