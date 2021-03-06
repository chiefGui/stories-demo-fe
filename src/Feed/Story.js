import React from 'react'
import PropTypes from 'prop-types'
import { compose, lifecycle, withState, withHandlers } from 'recompose'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import _ from 'lodash/fp'
import { Link } from 'react-router-dom'

import storiesList from '../Story/data/storiesList'
import Avatar from '../User/Avatar'
import colors from '../UI/colors'

const Container = styled.div`
  background-color: ${props =>
    props.isHighlighted ? '#FFFCD9' : 'transparent'};
  transition: ${props => !props.isHighlighted && 'background-color 1s ease-out'};
`
const User = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`
const Name = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
`
const Body = styled.div`
  display: ${props => (props.isInline ? 'flex' : 'block')};
  justify-content: ${props => props.isInline && 'center'};
  align-items: ${props => props.isInline && 'center'};
  padding: 20px;
  height: 100%;
  border-left: 1px solid ${colors.neutrals[20]};
`
const Icon = styled.img`
  display: ${props => (props.isInline ? 'inline' : 'block')};
  margin: ${props => (props.isInline ? null : '0 auto')};
  width: ${props => (props.isInline ? '40px' : '60px')};
`
const Title = styled.h3`
  margin: 0;
  margin-left: ${props => props.isInline && '10px'};
  color: ${colors.neutrals[100]};
  text-align: ${props => (props.isInline ? 'left' : 'center')};
  font-size: ${props => (props.isInline ? '1.2em' : '1.6em')};
`
const Description = styled.p`
  margin: 20px auto 0;
  text-align: center;
  font-size: 1.1em;
  color: ${colors.neutrals[60]};
  max-width: 80%;
`

const Story = ({
  title,
  description,
  user,
  shouldHighlight,
  isHighlighted
}) => {
  const allStories = storiesList.life.concat(storiesList.career)
  const IconGlyph = _.find(
    lifeStories => title === lifeStories.label && lifeStories.icon,
    allStories
  ).icon

  const isIconAnimage = typeof IconGlyph === 'string'
  const hasDescription = description !== null

  return (
    <Container isHighlighted={isHighlighted}>
      <Flex>
        <Box w={1 / 6}>
          <Link to={`/user/${user.slug}`}>
            <User>
              <Avatar url={user.avatar} size={60} />
              <Name>{user.displayName}</Name>
            </User>
          </Link>
        </Box>

        <Box w={5 / 6}>
          <Body isInline={!hasDescription}>
            {isIconAnimage ? (
              <Icon src={IconGlyph} isInline={!hasDescription} />
            ) : (
              <IconGlyph
                style={{
                  display: !hasDescription ? 'inline' : 'block',
                  margin: !hasDescription ? null : '0 auto',
                  fontSize: !hasDescription ? '30px' : '50px'
                }}
              />
            )}

            <Title isInline={!hasDescription}>{title}</Title>

            {hasDescription && <Description>{description}</Description>}
          </Body>
        </Box>
      </Flex>
    </Container>
  )
}

Story.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  user: PropTypes.object,
  shouldHighlight: PropTypes.bool,
  isHighlighted: PropTypes.bool
}

export default compose(
  withState('isHighlighted', 'setHighlight', false),
  withHandlers({
    highlight: ({ setHighlight }) => () => setHighlight(true),
    unhighlight: ({ setHighlight }) => () => setHighlight(false)
  }),
  lifecycle({
    componentDidMount () {
      const { shouldHighlight, highlight, unhighlight } = this.props

      if (shouldHighlight) {
        highlight()

        this.highlightTimeout = window.setTimeout(unhighlight, 3000)
      }
    },

    componentWillUnmount () {
      window.clearTimeout(this.highlightTimeout)
    }
  })
)(Story)
