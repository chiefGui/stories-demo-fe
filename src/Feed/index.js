import React from 'react'
import PropTypes from 'prop-types'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import styled from 'styled-components'
import faker from 'faker'
import { Loader } from 'semantic-ui-react'

import * as feedActions from './actions'
import Story from './Story'
import colors from '../UI/colors'

const Container = styled.div`
  position: relative;
  margin-top: 40px;
  background-color: #fff;
  border-radius: 3px;
`
const Wrapper = styled.div`
  position: relative;
  padding: 40px 0;
  width: 100%;
`
const Stories = styled.div``
const Title = styled.h3`
  margin: 0;
  padding: 20px;
`
const Item = styled.div`
  &:not(:first-child) {
    border-top: 1px solid ${colors.neutrals[20]};
  }
`

const Feed = ({ feed }) => {
  const isLoading = feed.isLoading || feed.stories === null

  return (
    <Container>
      {isLoading && (
        <Wrapper>
          <Loader active>Loading stories...</Loader>
        </Wrapper>
      )}

      {!isLoading && (
        <Stories>
          <Title>Latest 20 today's stories</Title>

          {feed.stories.map(story => (
            <Item key={`${story.title}-${faker.random.number()}`}>
              <Story {...story} />
            </Item>
          ))}
        </Stories>
      )}
    </Container>
  )
}

Feed.propTypes = {
  feed: PropTypes.object
}

const mapStateToProps = state => ({ feed: state.feed })
const mapDispatchToProps = {
  storiesLatestFetch: feedActions.storiesLatestFetch
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount () {
      this.props.storiesLatestFetch()
    }
  })
)(Feed)
