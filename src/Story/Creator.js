import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import { formValueSelector, reduxForm } from 'redux-form'
import { Tab, Loader } from 'semantic-ui-react'

import * as storyActions from './actions'
import Inputs from './Inputs'
import Preview from './Preview'

const Container = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`

const Wrapper = styled.div`
  padding: 20px;

  &:not(:first-child) {
    padding-top: 0;
  }
`

const WhatsUp = styled.h3``

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(26, 36, 43, 0.8);
  border-radius: 3px;
`

const panes = [
  {
    menuItem: {
      key: 'life',
      icon: 'pagelines',
      content: 'Life'
    },
    render: () => (
      <Tab.Pane>
        <Inputs category='life' />
      </Tab.Pane>
    )
  },

  {
    menuItem: {
      key: 'career',
      icon: 'briefcase',
      content: 'Career'
    },

    render: () => (
      <Tab.Pane>
        <Inputs category='career' />
      </Tab.Pane>
    )
  }
]

const Creator = ({ storyReducer, story, handleSubmit, onSubmit }) => {
  const isLoading = storyReducer.isLoading

  return (
    <Container>
      {isLoading && (
        <Backdrop>
          <Loader active inverted />
        </Backdrop>
      )}

      <Wrapper>
        <WhatsUp>Tell us your today's story</WhatsUp>

        <Tab panes={panes} />
      </Wrapper>

      {story && (
        <Preview
          story={story}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      )}
    </Container>
  )
}

Creator.propTypes = {
  storyReducer: PropTypes.object,
  story: PropTypes.object,
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func
}

const selector = formValueSelector('storyForm')

const mapStateToProps = state => ({
  storyReducer: state.story,
  story: selector(state, 'story'),
  self: state.self
})

const mapDispatchToProps = { submitStory: storyActions.submitStory }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'storyForm'
  }),
  withHandlers({
    onSubmit: props => values =>
      props.submitStory({
        userID: props.self.self._id,
        story: { ...values.story, description: values.description }
      })
  })
)(Creator)
