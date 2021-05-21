
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
  IntroductionIconesLink
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
            <a href={'#insta'}>Quem Sou</a>
            <a href={'#insta'}>Projeto</a>
            <a href={'#insta'}>Contato</a>
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
                <a href={'#insta'}>
                  <IntroductionIconesLink src={LinkedinIcon} alt={'Ícone do Linkedin'} />
                </a>
                <a href={'#insta'}>
                  <IntroductionIconesLink src={GithubIcon} alt={'Ícone do Github'} />
                </a>
                <a href={'#insta'}>
                  <IntroductionIconesLink src={CodePenIcon} alt={'Ícone do CodePen'} />
                </a>
                <a href={'#insta'}>
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
