import styled from "styled-components"

const Container__Main = styled.div`
  width: 100;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
  justify-self: center;
  min-height: 101vh;
  gap: 1rem;
`

const Wrapper = styled.div`
  max-width: 50rem;
  display: grid;
  place-items: center;
  max-width: 900px;
  width: 100%;
  align-content: flex-start;
  justify-items: center;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 1rem;

  @media only screen and (max-width: ${ p => p.theme.media.mobile}) {
    grid-template-columns: 1fr 1fr;
  }
`
const CSS = {
  mainContainer: Container__Main,
  Wrapper,
}

export default CSS;