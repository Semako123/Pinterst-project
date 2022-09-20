import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
      <>
          This is the homepage
          <Link to='/signup'> Sign Up</Link>
      </>
  )
}

export default Homepage