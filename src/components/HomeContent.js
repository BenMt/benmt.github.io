import React from 'react'
import { Box, Text } from 'rebass'

import Spacer from './Spacer'
import Wrapper from './Wrapper'
import HomeJumbotron from './HomeJumbotron'

const HomeContent = () => (
  <>
    <HomeJumbotron siteTitle="home" />

    <Box bg="#fff">
      <Wrapper>
        <Spacer />
        <Text as="h2">About me</Text>
        <Text>
          Je suis développeur web et mobile spécialisé front-end. Passionné par
          le milieu web, j'aime mon métier et la possibilité de pouvoir
          collaborer dans des projets ambitieux et humains. Après quelques
          années en agence, je me suis lancé en tant que freelance en 2014.
        </Text>
        <Spacer />

        <Text as="h2">About me</Text>
        <Text>
          Je suis développeur web et mobile spécialisé front-end. Passionné par
          le milieu web, j'aime mon métier et la possibilité de pouvoir
          collaborer dans des projets ambitieux et humains. Après quelques
          années en agence, je me suis lancé en tant que freelance en 2014.
        </Text>
        <Spacer />
      </Wrapper>
    </Box>
  </>
)

export default HomeContent
