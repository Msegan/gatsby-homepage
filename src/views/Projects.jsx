import React from 'react'
import PropTypes from 'prop-types'
import { Divider, DividerMiddle, DividerBottom } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

// Ugly hack bc of a chrome bug with clip-path
// https://stackoverflow.com/questions/53396831/clip-path-horizontal-white-line-in-chrome

const Projects = ({ children, offset }) => (
  <>
    <DividerMiddle
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      speed={-0.1}
      offset={`${offset}`}
      factor={0.2}
    />
    <Divider
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      speed={-0.1}
      offset={`${offset + 0.1}`}
      factor={1.05}
    />
    <DividerBottom
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      speed={-0.1}
      offset={`${offset + 1.2}`}
      factor={0.2}
    />
    <Content speed={0.4} offset={`${offset + 0.1}`} factor={1.2}>
      <Inner>{children}</Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={2}>
      <SVG icon="box" width={6} fill={colors.white} left="85%" top="75%" />
      <SVG icon="circle" hiddenMobile width={24} fill={colors.white} left="17%" top="50%" />
      <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="30%" />
      <SVG icon="circle" width={6} fill={colors.white} left="75%" top="15%" />
      <SVG icon="circle" width={6} fill={colors.white} left="4%" top="25%" />
    </Divider>
  </>
)

export default Projects

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
