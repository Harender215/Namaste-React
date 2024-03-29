import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <div>
      <h1>Oops!</h1>
      <h2>Something went Wrong</h2>
      <h3>{error.status} {"  "+error.statusText}</h3>
      {error.data}
    </div>
  )
}

export default Error
