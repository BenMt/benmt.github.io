import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { translate } from 'react-translate'

const NavigationStyled = styled.div`
  position: fixed;
  width: 40px;
  height: 100%;
  left: 0;
  z-index: 5;
`

const Ul = styled.ul`
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
`

const Li = styled.li`
  width: 40px;
  height: 40px;
  float: left;
  color: #fff;
  margin-bottom: 1px;
  position: relative;
  background: ${props => props.theme.color.main};
  list-style: none;
  margin-bottom: 4px;
  cursor: pointer;
`

const Navigation = ({ t }) => (
  <NavigationStyled>
    <Ul>
      <Li>{t('about')}</Li>
      <Li>{t('work')}</Li>
    </Ul>
  </NavigationStyled>
)

Navigation.propTypes = {
  t: PropTypes.func.isRequired
}

export default translate('Navigation')(Navigation)
