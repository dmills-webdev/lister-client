import React from 'react'
import { NavLink } from 'react-router-dom'

import '../scss/Navbar.scss'

function toggleMenu(e) {
  const menu = document.getElementById('main-nav')
  menu.classList.toggle('nav-popout')
}

function NavbarLoggedIn({ user, setUser }) {
  // Log current user out
  function logout() {
    fetch( process.env.REACT_APP_BACKEND_URL + 'logout', {
      credentials: 'include'
    })
    .then( setUser(null) )
    .then( window.localStorage.removeItem('listerToken') )
  }
  return (
    <nav id='main-nav'>
      <div className='nav-user'>
        {user}
      </div>
      <div className='nav-button' onClick={logout}>
        Logout
      </div>
    </nav>
  )
}

function NavbarLoggedOut() {
  return (
    <nav id='main-nav'>
      <NavLink
        to='/login' exact
        activeClassName='activeLink'
        className='nav-button'
        onClick={toggleMenu}>
          Login
      </NavLink>

      <NavLink
        to='/signup' exact
        activeClassName='activeLink'
        className='nav-button'
        onClick={toggleMenu}>
          Signup
      </NavLink>

      <NavLink
        to='/' exact
        activeClassName='activeLink'
        className='nav-button'
        onClick={toggleMenu}>
          Todos
      </NavLink>
    </nav>
  )
}

export { NavbarLoggedIn, NavbarLoggedOut }
