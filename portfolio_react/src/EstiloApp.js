import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1300px) {
    flex-direction: column;
  }
`

export const BotaoDark = styled.p`
font-weight:bold;
`;
