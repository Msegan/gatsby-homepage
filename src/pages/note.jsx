import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

// Components
import Layout from '../components/Layout'

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Note = () => (
  <>
    <Layout />
    hi
    <Footer>
      &copy; 2019 by Max Segan
    </Footer>
  </>
)

export default Note
