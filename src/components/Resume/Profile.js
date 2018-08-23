import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Title from '../Title'
import Wrapper from '../Wrapper'
import Flexbox from '../Flexbox'

const StyledTitle = styled(Title)`
  margin-bottom: 0;
  @media (max-width: 30em) {
    font-size: 2.5em;
  }
`

const Subtitle = styled.h2`
  font-size: 2em;
  margin-top: 0;
  @media (max-width: 30em) {
    font-size: 1.8em;
  }
`

const Profile = ({ translations, author }) => (
  <Wrapper>
    <StyledTitle>{author.name}</StyledTitle>
    <Subtitle>{translations.location}</Subtitle>
    <Flexbox>
      <h1>PROFILE</h1>
      <p>Bla bla</p>
    </Flexbox>
  </Wrapper>
)

Profile.propTypes = {
  translations: PropTypes.shape({}).isRequired,
  author: PropTypes.shape({}).isRequired
}

export default Profile
