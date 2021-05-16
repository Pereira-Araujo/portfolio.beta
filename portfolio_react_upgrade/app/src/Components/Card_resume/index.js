import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../../styles/theme'
import GlobalStyles from '../../styles/globalStyle'

import {
  Container,
  Card,
  Resume,
  PhotoProfile,
  Title,
  BoxContact,
  ContactBackIcon,
  ContactIcon,
  BoxTopics,
  Topics,
  TopicIcon,
  ChangeThemeButton
} from './style'
import ProfilePhoto from '../../assets/profile/araujo.png'
import Linkedin from '../../assets/icons_contact/linkedin.png'
import Github from '../../assets/icons_contact/github.png'
import Email from '../../assets/icons_contact/email.png'
import Home from '../../assets/icons_menu/home.png'
import Projects from '../../assets/icons_menu/gallery.png'
import Skills from '../../assets/icons_menu/skills.png'
import About from '../../assets/icons_menu/about.png'
import Contact from '../../assets/icons_menu/chat.png'

import MoonIcon from '../../assets/icons_change-theme/moon.png'
import SunIcon from '../../assets/icons_change-theme/sun.png'

function Card_resume() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [changeIcon, setChangeIcon] = useState(MoonIcon)
  const [descriptionIcon, setDescriptionIcon] = useState('Icone de uma lua')

  const changeStates = () => {
    setIsDarkTheme(!isDarkTheme)

    if (changeIcon === MoonIcon) {
      setChangeIcon(SunIcon)
      setDescriptionIcon('Icone de um sol')
    } else {
      setChangeIcon(MoonIcon)
      setDescriptionIcon('Icone de uma lua')
    }
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Container>
      <Card className={'blocks'}>
        <GlobalStyles />
        <Resume>
          <figure>
            <PhotoProfile
              src={ProfilePhoto}
              alt={'foto de perfil: homem barbudo de azul'}
            />
            <Title>
              <h3>Adriano Araujo</h3>
              <p>Desenvolvedor Front-End</p>
            </Title>
          </figure>

          <BoxContact>
            <ContactBackIcon className="icons">
              <a
                target={'_blank'}
                rel={'noreferrer'}
                href={'https://www.linkedin.com/in/araujocode/'}
              >
                <ContactIcon src={Linkedin} alt={'linkedin'} />
              </a>
            </ContactBackIcon>

            <ContactBackIcon className="icons">
              <a
                target={'_blank'}
                rel={'noreferrer'}
                href={'https://github.com/Pereira-Araujo'}
              >
                <ContactIcon src={Github} alt={'github'} />
              </a>
            </ContactBackIcon>

            <ContactBackIcon className="icons">
              <a
                target={'_blank'}
                rel={'noreferrer'}
                href={'mailto: araujo_ir@yahoo.com'}
              >
                <ContactIcon src={Email} alt={'email'} />
              </a>
            </ContactBackIcon>
          </BoxContact>
        </Resume>

        <BoxTopics>
          <Topics className="icons">
            <a href={"#home"}>
              <TopicIcon src={Home} alt={'Home'} />
              Home
            </a>

            <a href={"#projects"}>
              <TopicIcon src={Projects} alt={'Projetos'} />
              Projetos
            </a>

            <a href={"#skills"}>
              <TopicIcon src={Skills} alt={'Habilidade'} />
              Habilidades
            </a>

            <a href={"#about"}>
              <TopicIcon src={About} alt={'Sobre'} />
              Sobre
            </a>

            <a href={"#contact"}>
              <TopicIcon src={Contact} alt={'Contato'} />
              Contato
            </a>
          </Topics>

          <ChangeThemeButton
            className="icons"
            src={changeIcon}
            alt={descriptionIcon}
            onClick={changeStates}
          />
        </BoxTopics>
      </Card>
      </Container>
    </ThemeProvider>
  )
}

export default Card_resume
