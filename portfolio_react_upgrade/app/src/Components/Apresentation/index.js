
import Profile from '../../assets/profile.jpeg'
import {
  Introduction,
  IntroductionPhoto,
  IntroductionMenu,
  IntroductionBox,
  IntroductionDescription,
  IntroductionTitle,
  IntroductionSubTitle,
  IntroductionSubText,
  IntroductionLinks,
  IntroductionIconesLink,
  IntroductionNavigation
} from './style'
import LinkedinIcon from '../../assets/icons/linkedin.png'
import GithubIcon from '../../assets/icons/github.png'
import CodePenIcon from '../../assets/icons/codepen.png'
import EmailIcon from '../../assets/icons/email.png'

function Apresentation() {
  return (
    <>

      <Introduction>
        <IntroductionPhoto
          src={Profile}
          alt={'imagem de perfil'}
        />
        <section>
          <IntroductionMenu>
            <>
            <IntroductionNavigation href={'#about'}>Quem Sou</IntroductionNavigation>
            <IntroductionNavigation href={'#projects'}>Projeto</IntroductionNavigation>
            <IntroductionNavigation href={'#contact'}>Contato</IntroductionNavigation>
            </>
          </IntroductionMenu>

          <IntroductionBox>

            <IntroductionDescription>
              <IntroductionTitle>
                <p>Eu sou</p>
                <p>Adriano Araujo</p>
                <IntroductionSubTitle>
                  Desenvolvedor Front-End
              </IntroductionSubTitle>
                <IntroductionSubText>
                  Apaixonado por tecnologia e programação.
              </IntroductionSubText>
              </IntroductionTitle>
              <IntroductionLinks>
                <a href={'https://www.linkedin.com/in/araujocode/'} target="_blank" >
                  <IntroductionIconesLink src={LinkedinIcon} alt={'Ícone do Linkedin'} />
                </a>
                <a href={'https://github.com/Pereira-Araujo'} target="_blank" >
                  <IntroductionIconesLink src={GithubIcon} alt={'Ícone do Github'} />
                </a>
                <a href={'https://codepen.io/araujo6_6'} target="_blank">
                  <IntroductionIconesLink src={CodePenIcon} alt={'Ícone do CodePen'} />
                </a>
                <a href={'mailto:araujo_ir@yahoo.com'} target="_blank" >
                  <IntroductionIconesLink src={EmailIcon} alt={'Ícone do Email'} />
                </a>
              </IntroductionLinks>
            </IntroductionDescription>
          </IntroductionBox>
        </section>
      </Introduction>
    </>

  )
}

export default Apresentation
