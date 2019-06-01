import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

// Components
import Layout from '../components/Layout'

const Footer = styled.footer`
  ${tw`text-center text-grey pin-b p-6 font-sans text-md lg:text-lg z-10 mt-8`};
`

const Content = styled.div`
  ${tw`md:px-12 lg:px-24 justify-center items-center flex-col flex relative`};
`

const BackgroundContent = styled.div`
  ${tw`absolute w-full h-full z-0`};
`

const BackgroundImage = styled.div`
  ${tw`w-full z-0`};
  background-image: linear-gradient(to right, #161719 0%, #0F2027 100%);
  margin-top: -200px;
  position: fixed;
  height: 200%;
`

const NoteText = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans text-justify z-10`};
  margin-bottom: 2px;
`

const TitleText = styled.p`
  ${tw`pt-6 text-grey-light font-sans text-3xl md:text-4xl xl:text-5xl z-10 mb-0`};
`

const DateText = styled.p`
  ${tw`text-grey text-lg md:text-xl lg:text-2xl font-sans text-justify z-10 italic`};
  margin-bottom: 2px;
`

const Note = ({ note }) => (
  <>
    <Layout />
    <Content>
      <BackgroundContent>
        <BackgroundImage />
        <SVG icon="circle" width={16} fill={colors['grey-darker']} left="70%" top="90%" />
        <SVG icon="triangle" width={16} stroke={colors['grey-darkest']} left="30%" top="65%" />
        <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="75%" top="10%" />
        <SVG icon="upDown" hiddenMobile width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        <SVG icon="circle" hiddenMobile width={24} fill={colors['grey-darker']} left="5%" top="70%" />
        <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="50%" top="60%" />
        <SVG icon="upDown" width={8} fill={colors['grey-darkest']} left="95%" top="90%" />
        <SVG icon="triangle" width={8} stroke={colors['grey-darker']} left="25%" top="5%" />
        <SVG icon="box" width={6} fill={colors['grey-darkest']} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors['grey-darkest']} left="40%" top="30%" />
        <SVG icon="hexa" width={16} stroke={colors['grey-darker']} left="10%" top="50%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darker']} left="80%" top="70%" />
      </BackgroundContent>
      <TitleText>{note['title']}</TitleText>
      <DateText>Published {note['date']}</DateText>
      {note['content'].map(text => <NoteText><div dangerouslySetInnerHTML={{ __html: text }} /></NoteText>)}
      <Footer>
        &copy; 2019 by Max Segan
      </Footer>
    </Content>
  </>
)

export default Note
