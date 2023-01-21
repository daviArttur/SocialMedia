import styled from "styled-components";

const image = styled.img`

    display: flex;
    height: 100%;
    width: 100%;
    max-height: 278px;
    cursor: pointer;

    @media only screen and (min-width: ${ p => p.theme.media.mobile}) {
        &:nth-of-type(6n) {
        grid-column: 2 / 4;
        grid-row: 1/ 3;
        object-fit: cover;
        max-height: none;
        width: 100%;
     }
    }
  
  &:hover {
    box-shadow: 5px 5px 5px black;
    transition: .3s;
  }
`

export const CSS = {
  image
}
