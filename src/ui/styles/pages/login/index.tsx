import { slideAnimation } from "@/ui/animations/slideAnimation";
import { Button } from "@/ui/components/button";
import { Input } from "@/ui/components/input";
import styled from "styled-components";

const Container__Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 101vh;

  ${slideAnimation()}
`;

const img = styled.div`
  width: 50%;
  height: 100%;
  object-fit: contain;
  background-color: black;
  background: url("https://dogs.origamid.dev/static/media/login.824d7d85.jpg") no-repeat 50%;
  background-size: cover;

  @media screen and (max-width: ${p => p.theme.media.mobile} ) {
    display: none;
  }
`

const container = styled.div`
  display: flex;
  width: 50%;
  height: 100vh;
  flex-flow: column nowrap;
  padding: 2rem;
  justify-content: center;

  @media screen and (max-width: ${p => p.theme.media.mobile} ) {
    width: 100%;
  }
`;

const input = styled(Input)`
  max-width: none;
`

const form = styled.form`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
`

const button = styled(Button)`
  max-width: 150px;
  @media only screen and (max-width: ${p => p.theme.media.mobile} ) {
    width: 100px;
  }
`

const CSS = {
  main: Container__Main,
  img,
  container,
  form,
  button,
  input
}

export default CSS;

