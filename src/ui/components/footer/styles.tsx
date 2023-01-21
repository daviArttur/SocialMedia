import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: 7rem;
  background-color: ${p => p.theme.colors.yellow[500]};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  gap: .5rem;

  p {
    margin: 0;
  }
`