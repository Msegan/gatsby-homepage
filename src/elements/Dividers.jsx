import styled from 'styled-components'
import tw from 'tailwind.macro'
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs'

export const Divider = styled(ParallaxLayer)`
  ${tw`absolute w-full h-full`};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`

export const DividerMiddle = styled(ParallaxLayer)`
  clip-path: polygon(0% 0%, 100% 50%, 100% 100%, 0% 100%);
  background: ${props => props.bg};
`

export const DividerBottom = styled(ParallaxLayer)`
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 50%);
  background: ${props => props.bg};
`