import React from 'react'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const Contact = ({ children, offset }) => (
  <>
    <Divider fill="#23262b" speed={0.2} offset={offset}>
    </Divider>
    <Content speed={0.4} offset={offset}>
      {children}
    </Content>
    <Divider speed={0.1} offset={offset}>
      <SVG icon="upDown" hiddenMobile width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
      <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
      <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
      <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
      <SVG icon="upDown" hiddenMobile width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
      <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
      <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
      <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
      <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
    </Divider>
  </>
)

export default Contact

Contact.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
