import styled from 'styled-components'

export const Container = styled.main`
display:flex;
align-items:center;

`

export const Card = styled.section`
  width: 20rem;
  height: 36rem;
  padding-top:2rem;
  margin-left:3rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media(max-width:977px){
    margin-top:2rem;
    margin-left:0;
}

`
export const Resume = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PhotoProfile = styled.img`
  border-radius: 100%;
  width: 8rem;
`
export const Title = styled.figcaption`
  line-height: 0;
`

export const BoxContact = styled.article`
  width: 12rem;
  display: flex;
  justify-content: space-around;
  margin-bottom: 4rem;
`
export const ContactBackIcon = styled.section`
  width: 2.6rem;
  height: 2.6rem;
  border: solid 1px black;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ContactIcon = styled.img`
  width: 1.4rem;
  border-radius: 10%;

  &:hover{
    filter:invert(15%);

  }
  

`
export const BoxTopics = styled.section`
  width: 40%;
  margin-left: 2.8rem;
`

export const Topics = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & a:hover{
    filter:invert(15%);

  }

`

export const TopicIcon = styled.img`
  width: 1.3rem;
  margin-right: 1rem;

`
export const ChangeThemeButton = styled.img`
  margin-top:2rem;
  width:1.3rem;
`
