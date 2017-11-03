import React from 'react'
import PropTypes from 'prop-types'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import _ from 'lodash/fp'
import { Link } from 'react-router-dom'
import { Dimmer, Loader, Breadcrumb } from 'semantic-ui-react'

import * as actions from './actions'
import Avatar from '../User/Avatar'
import Feed from '../Feed'

const Container = styled.div``
const Sidebar = styled(Box)`
  padding: 40px;
  width: 400px;
`
const Body = styled(Box)`
  padding: 40px 0;
  min-height: 100vh;
  width: 800px;
`
const Name = styled.h3`
  margin: 0;
  padding: 0;
  margin-left: 20px;
`

const Profile = ({ profile }) => {
  const isLoading = profile.isLoading || !profile.user

  if (isLoading) {
    return (
      <Dimmer active inverted>
        <Loader inverted />
      </Dimmer>
    )
  }

  const stories = _.map(
    story => ({
      ...story,
      user: _.omit('stories', profile.user)
    }),
    profile.user.stories
  )

  return (
    <Container>
      <Flex>
        <Sidebar>
          <Flex align='center'>
            <Box>
              <Avatar url={profile.user.avatar} size={80} />
            </Box>

            <Box>
              <Name>{profile.user.displayName}</Name>
            </Box>
          </Flex>
        </Sidebar>

        <Body>
          <Breadcrumb>
            <Breadcrumb.Section>
              <Link to='/'>Home</Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section active>
              {profile.user.displayName}
            </Breadcrumb.Section>
          </Breadcrumb>
          <Feed
            title={`Latest 20 stories by ${profile.user.displayName}`}
            stories={stories}
          />
        </Body>
      </Flex>
    </Container>
  )
}

Profile.propTypes = {
  profile: PropTypes.object
}

const mapStateToProps = ({ profile }) => ({ profile })
const mapDispatchToProps = { fetchUser: actions.fetchUser }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount () {
      const { match, fetchUser } = this.props
      const { slug } = match.params

      fetchUser(slug)
    }
  })
)(Profile)
