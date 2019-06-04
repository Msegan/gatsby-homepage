import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto mr-8`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Wrapper = styled.div`
  ${tw`w-full items-center flex z-50`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={3.4}>
      <Hero offset={0}>
        <Wrapper>
          <Avatar src={avatar} alt="Max Segan" />
          <div>
            <BigTitle>
              Max Segan
            </BigTitle>
            <Subtitle>Build, design, write</Subtitle>
          </div>
        </Wrapper>
        <AboutDesc>
          Engineering Director at Facebook. Tennis, basketball, and lifting.
          Avid Economist reader and political junkie. New Yorker. 
        <br /><br />
          I'm writing ever more documents that don't compile.
          I use this page to practice clear, persuasive, and concise writing with a dash of web development.
        </AboutDesc>
      </Hero>
      <Projects offset={1.1}>
        <Title>Notes</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="On Debt"
            link="debt"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Debt isn't a four-letter  word
          </ProjectCard>
          <ProjectCard
            title="The Pen"
            link="pen"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            And I'll write whatever you want, just put down the gun
          </ProjectCard>
          <ProjectCard
            title="[WIP] On Conviction"
            link="conviction"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            
          </ProjectCard>
          <ProjectCard
            title="[WIP] On Exceptionalism"
            link="exceptionalism"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Work in progress
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <Contact offset={2.5}>
        <Inner>
          <Title>Feel free to reach out</Title>
          <ContactText>
            On <a href="mailto:max@segan.com">Email</a>,{' '}
            <a href="https://facebook.com/maxsegan">Facebook</a>, or{' '}
            <a href="https://instagram.com/maxsegan">Instagram</a>.
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Max Segan
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
