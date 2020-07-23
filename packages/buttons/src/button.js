import React from 'react'
import { Spinner } from 'spinner3000'

function Button(props) {
  const { loading, primary, children, ...rest } = props
  const className = primary ? 'btn btn-primary' : 'btn'
  return (
    <button type='button' className={className} {...rest}>
      {children}
      {loading && <Spinner />}
    </button>
  )
}

export default Button
