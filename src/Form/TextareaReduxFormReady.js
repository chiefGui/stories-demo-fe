import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from '../UI/colors'

const TextArea = styled.textarea`
  font-family: Lato, sans-serif;
  display: block;
  padding: 10px;
  margin: 0 auto;
  width: 40%;
  min-height: 80px;
  outline: none;
  border-radius: 3px;
  resize: none;
  border: 1px solid ${colors.blues[40]};
  font-size: 1.1em;
  color: ${colors.neutrals[100]};

  &:hover, &:focus {
    border-color: ${colors.blues[60]};
  }
`

const TextareaReduxFormReady = ({ input, ...rest }) => (
  <TextArea onChange={input.onChange} {...rest} />
)

TextareaReduxFormReady.propTypes = {
  input: PropTypes.object
}

export default TextareaReduxFormReady
