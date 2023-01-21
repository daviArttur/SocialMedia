import { theme } from "@/ui/styles/theme";
import styled from "styled-components"

const Container__Main = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  justify-self: center;
  border: 1px solid #4949496c;
  border-radius: 5px;
  justify-content: space-between;
  height: 100%;
  max-height: 650px;
  max-width: 64rem;

  @media screen and (max-width: ${p => theme.media.desktop}) {
    flex-flow: column nowrap;
    max-height: none;
    height: auto;

    img {
      width: 100%;
    }
  }
`;

const Container__Data = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
  padding: 1rem 2rem;
  align-items: flex-start;
  width: 40%;
  height: 100%;

  @media screen and (max-width: ${p => theme.media.desktop}) {
    width: 100%;
  }
`;

const image = styled.img`
  width: 60%;
  height: 100%;
`;

const views = styled.span`
  color: ${p => p.theme.colors.gray[400]};
`;

const title = styled.h1`
  font-size: 48px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background-color: ${theme.colors.yellow[500]};
    bottom: 5px;
    left: -0.1875rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 2px;
    z-index: -1;
  }
`;

const Container__Title__View = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Container__Weight__Age = styled.div`
  display: flex;
  gap: 1rem;
`;

const about = styled.p`
  padding-left: .5rem;
  font-weight: bold;
  border-left: 2px solid black;
  color: ${p => p.theme.colors.black};
`;

const input = styled.input`
  padding: 1rem;
  border: none;
  justify-self: flex-end;
  background-color: ${p => p.theme.colors.gray[200]};
  border-radius: .4rem;
  transition: .1s;
  &:focus {
    outline: 3px solid ${p => p.theme.colors.yellow[500]};
  }

  @media screen and (max-width: ${p => theme.media.desktop}) {
    width: 80%;
  }
`

const coments = styled.ul`
  display: flex;
  width: 100%;
  height: 250px;
  overflow-y: auto;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  flex-flow: column nowrap;

  li {
    margin: 0;
  }

  mark {
    font-weight: 800;
    background-color: white;
  }

  p {
    margin: 0;
  }
`
const form = styled.form`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const CSS = {
  image,
  title,
  input,
  views,
  about,
  coments,
  form,
  containers: {
    main: Container__Main,
    titleAndView: Container__Title__View,
    weightAndAge: Container__Weight__Age,
    data: Container__Data
  }
}