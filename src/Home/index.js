import React from 'react'
import PropTypes from 'prop-types'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { Loader, Dimmer } from 'semantic-ui-react'

import * as selfActions from '../Self/actions'
import Profile from './Profile'
import StoryCreator from '../Story/Creator'
import Feed from '../Feed'

const Sidebar = styled(Box)`
  padding: 40px;
  width: 400px;
`
const Body = styled(Box)`
  padding: 40px 0;
  min-height: 100vh;
  width: 800px;
`

const Home = ({ home }) => {
  const isLoading =
    home.isLoading || home.self === null || home.stories === null

  if (isLoading) {
    return (
      <Dimmer active inverted>
        <Loader inverted />
      </Dimmer>
    )
  }

  return (
    <Flex>
      <Sidebar>
        <Profile user={home.self} />
      </Sidebar>

      <Body>
        <StoryCreator />
        <Feed
          title="Latest 20 today's stories"
          stories={home.stories}
          lastStoryBySelf={home.lastStoryBySelf}
        />
      </Body>
    </Flex>
  )
}

Home.propTypes = {
  home: PropTypes.object
}

const mapStateToProps = ({ home }) => ({ home })
const mapDispatchToProps = {
  loginSelf: selfActions.login
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount () {
      const { loginSelf } = this.props

      loginSelf()
    }
  })
)(Home)
