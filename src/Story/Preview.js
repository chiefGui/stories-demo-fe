import React from 'react'
import { compose } from 'recompose'
import { reduxForm, Field } from 'redux-form'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

import TextareaReduxFormReady from '../Form/TextareaReduxFormReady'
import colors from '../UI/colors'

const Container = styled.div`
  padding: 40px 0;
  background-color: #f2f6f9;
  text-align: center;
  border-top: 1px solid ${colors.blues[40]};
`

const Figure = styled.div`
  margin: 0 auto;
  width: 42px;
  height: 42px;
  font-size: 42px;
`

const Title = styled.h2`margin: 10px 0 0;`

const Textarea = styled.div`margin: 20px 0;`

const DateOfOccurrance = styled.p`
  margin: 10px 0;
  padding: 0;
  font-size: 14px;
  color: ${colors.neutrals[40]};
`

const Preview = ({ story, handleSubmit, onSubmit }) => {
  const hasIcon = !!story.icon
  const isIconAString = typeof story.icon === 'string'

  return (
    <Container>
      {hasIcon && (
        <Figure>
          {isIconAString && (
            <img style={{ width: '100%' }} src={story.icon} alt='Icon' />
          )}
          {!isIconAString && <story.icon />}
        </Figure>
      )}

      <Title>{story.label}</Title>

      <Textarea>
        <Field
          component={TextareaReduxFormReady}
          placeholder='Tell us more about your story. (Optional)'
          name='description'
          autoFocus
        />
      </Textarea>

      <DateOfOccurrance>Today</DateOfOccurrance>

      <Button type='submit' color='blue' onClick={handleSubmit(onSubmit)}>
        Submit
      </Button>
    </Container>
  )
}

Preview.propTypes = {
  story: PropTypes.object,
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func
}

export default compose(reduxForm({ form: 'storyForm' }))(Preview)
