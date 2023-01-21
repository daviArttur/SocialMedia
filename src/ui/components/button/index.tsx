import styled from "styled-components";


export const Button = styled.button`
  background-color: ${ p => p.theme.colors.yellow[500]};
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: #fb1;
  color: #764701;
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: .1s;
  max-width: 25rem;
  width: 100%;
`