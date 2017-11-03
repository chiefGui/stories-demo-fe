import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

import Avatar from '../User/Avatar'

const Name = styled.h3`
  margin: 0;
  padding: 0;
  margin-left: 20px;
`

const Profile = ({ user }) => (
  <Flex align='center'>
    <Box>
      <Avatar url={user.avatar} size={80} />
    </Box>

    <Box>
      <Name>{user.displayName}</Name>
    </Box>
  </Flex>
)

Profile.propTypes = {
  user: PropTypes.object
}

export default Profile
