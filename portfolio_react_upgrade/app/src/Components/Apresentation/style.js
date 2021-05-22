import styled from "styled-components";

export const Introduction = styled.main`
  width: 100vw;
  height: 580px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const IntroductionPhoto = styled.img`
  width: 480px;
  height: 580px;
`;

export const IntroductionBox = styled.div`
  width: 770px;
  padding: 145px 52px 132px 192px;
  background-color: #f26363;
`;

export const IntroductionMenu = styled.nav`
  display: flex;
  justify-content: flex-end;
  background:#f26363;

`;

export const IntroductionNavigation = styled.a`
  color:white;
  text-decoration:none;
  padding:1rem;
`

export const IntroductionDescription = styled.div`
  width: 680px;
  display: flex;
  justify-content: space-between;
`;

export const IntroductionTitle = styled.article`
  line-height: 0;
  font-family: Montserrat;
  font-size: 54px;
  font-weight: bolder;
  color: white;
  letter-spacing: -0.29px;
`;

export const IntroductionSubTitle = styled.p`
  font-size: 24px;
  font-weight: normal;
  letter-spacing: -0.32px;
`;

export const IntroductionSubText = styled.p`
  padding-top: 3rem;
  font-size: 16px;
  font-weight: normal;
`;

export const IntroductionLinks = styled.nav`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const IntroductionIconesLink = styled.img`
  width: 2rem;
  filter: invert(100%);
`;

