import styled from "styled-components";



export const Input = styled.input`
  display: block;
  border: none;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: #eee;
  transition: .1s;
  max-width: 25rem;

  &:hover, &:focus {
    background-color: ${ p => p.theme.colors.white };
    outline: 2px solid ${ p => p.theme.colors.yellow[500] };
  }
`