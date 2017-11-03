import React from 'react'
import PropTypes from 'prop-types'
import { compose, lifecycle, withHandlers, withState } from 'recompose'
import styled from 'styled-components'
import { Loader, Dimmer } from 'semantic-ui-react'

import colors from '../UI/colors'

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${colors.blues[60]};
  border-radius: 100%;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

const Avatar = ({ url, size, isImageLoaded }) => (
  <Container size={size}>
    {!isImageLoaded && (
      <Dimmer active>
        <Loader inverted active />
      </Dimmer>
    )}
    {isImageLoaded && <Img src={url} />}
  </Container>
)

Avatar.propTypes = {
  url: PropTypes.string,
  size: PropTypes.number,
  isImageLoaded: PropTypes.bool
}

export default compose(
  withState('isImageLoaded', 'setImageState', false),
  withHandlers({
    communicateImageValidness: ({ setImageState }) => () => setImageState(true)
  }),
  lifecycle({
    componentDidMount () {
      this.image = new window.Image()
      this.image.onload = () => this.props.communicateImageValidness()
      this.image.src = this.props.url
    },

    componentWillUnmount () {
      if (!this.image) {
        return
      }

      this.image.onload = function () {}

      delete this.image
    }
  })
)(Avatar)
