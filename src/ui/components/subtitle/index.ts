import styled from "styled-components";


export const Subtitle = styled.h2`
  font-size: 2rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;

    background: #ddd;
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`