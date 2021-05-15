import styled from 'styled-components'

export const Card = styled.section`
  margin-left: 2rem;
  width: 20rem;
  height: 34rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
`
export const BoxTopics = styled.section`
  width: 40%;
  margin-left: 2.8rem;
`

export const Topics = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & a {
    color: black;
  }
`

export const TopicIcon = styled.img`
  width: 1.3rem;
  margin-right: 1rem;
`
