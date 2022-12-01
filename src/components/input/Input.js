import React from 'react'
import { useId } from 'react'
import { StyledInput, Wrapper } from './Styles'

const Input = ({ placeholder, error, label , ...props }) => {

  const id = useId()

  return (
    <Wrapper>
    <StyledInput
        id={id}
        placeholder={placeholder}
        {...props}
    />
</Wrapper>
  )
}

export default Input;