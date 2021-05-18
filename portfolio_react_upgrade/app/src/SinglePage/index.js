import './style.css'
import Profile from '../assets/profile.jpeg'

import LinkedinIcon from '../assets/icons/linkedin.png'
import GithubIcon from '../assets/icons/github.png'
import CodePenIcon from '../assets/icons/codepen.png'
import EmailIcon from '../assets/icons/email.png'

function SinglePage() {
  return (
    
      
      <main className={'introduction'}>
        <img
          className={'introduction__photo'}
          src={Profile}
          alt={'imagem de perfil'}
        />

        <section className={'introduction__box'}>

       
        <nav className={'introduction__menu'} >
        <a href={'#insta'}>Quem Sou</a>
        <a href={'#insta'}>Projeto</a>
        <a href={'#insta'}>Contato</a>
         </nav>
       

        <div className={'introduction__description'}>
            <article className={'introduction__title'}>
              <p>Eu sou</p>
              <p>Adriano Araujo</p>
              <p className={'introduction__sub-title'}>
                Desenvolvedor Front-End
              </p>
              <p className={'introduction__sub-text'}>
                Apaixonado por tecnologia e programação.
              </p>
            </article>
            <nav className={'introduction__links'}>
              <a href={'#insta'}>
                <img src={LinkedinIcon} alt={'Ícone do Linkedin'} />
              </a>
              <a href={'#insta'}>
                <img src={GithubIcon} alt={'Ícone do Github'} />
              </a>
              <a href={'#insta'}>
                <img src={CodePenIcon} alt={'Ícone do CodePen'} />
              </a>
              <a href={'#insta'}>
                <img src={EmailIcon} alt={'Ícone do Email'} />
              </a>
            </nav>
          </div>
        </section>
      </main>
    
  )
}

export default SinglePage
