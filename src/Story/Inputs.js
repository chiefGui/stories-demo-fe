import React from 'react'
import { compose } from 'recompose'
import { reduxForm, Field } from 'redux-form'
import { Button } from 'semantic-ui-react'

import storiesList from './data/storiesList'

const StoryInputAsAField = ({ input, payload, label, icon, ...rest }) => {
  return (
    <Button
      style={{
        margin: 0,
        marginTop: 5,
        marginRight: 5
      }}
      size='tiny'
      onClick={() => input.onChange({ label, payload, icon })}
      {...rest}
    >
      {label}
    </Button>
  )
}

const Inputs = ({ category }) => {
  return (
    <div>
      {storiesList[category].map(storyDetails => (
        <Field
          key={storyDetails.payload}
          component={StoryInputAsAField}
          name='story'
          {...storyDetails}
        />
      ))}
    </div>
  )
}

export default compose(
  reduxForm({
    form: 'storyForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  })
)(Inputs)
