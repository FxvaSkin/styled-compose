import React from 'react'
import { nanoid } from 'nanoid'

const Input = ({ label, ...props }) => {
  const id = nanoid()
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </>
  )
}

export { Input }
