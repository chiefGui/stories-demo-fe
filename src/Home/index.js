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

const Home = ({ self }) => {
  const selfUser = self.self
  const isLoading = self.isLoading || selfUser === null

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
        <Profile user={selfUser} />
      </Sidebar>

      <Body>
        <StoryCreator />
        <Feed />
      </Body>
    </Flex>
  )
}

Home.propTypes = {
  self: PropTypes.object
}

const mapStateToProps = state => ({
  self: state.self
})
const mapDispatchToProps = { loginSelf: selfActions.login }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount () {
      const { loginSelf } = this.props

      loginSelf()
    }
  })
)(Home)
