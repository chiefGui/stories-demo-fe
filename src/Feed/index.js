import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import faker from 'faker'
import { Loader } from 'semantic-ui-react'
import _ from 'lodash/fp'

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

const Feed = ({ title, stories, lastStoryBySelf, isLoading }) => (
  <Container>
    {isLoading && (
      <Wrapper>
        <Loader active>Loading stories...</Loader>
      </Wrapper>
    )}

    {!isLoading && (
      <Stories>
        <Title>{title}</Title>

        {_.map(story => {
          const shouldHighlight = lastStoryBySelf
            ? story._id === lastStoryBySelf._id
            : false

          return (
            <Item key={`${story.title}-${faker.random.number()}`}>
              <Story {...story} shouldHighlight={shouldHighlight} />
            </Item>
          )
        }, stories)}
      </Stories>
    )}
  </Container>
)

Feed.propTypes = {
  title: PropTypes.string,
  stories: PropTypes.arrayOf(PropTypes.object),
  lastStoryBySelf: PropTypes.object,
  isLoading: PropTypes.bool
}

export default Feed
