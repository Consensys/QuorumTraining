import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {

	return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/create">Create and Manage Assets</Link></li>
      <li><Link to="/trade">Trade Assets</Link></li>
    </ul>
	)
}

export default Menu
