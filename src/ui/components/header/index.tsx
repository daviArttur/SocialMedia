import Link from "next/link"
import styled from "styled-components"
import { DogFace } from "../icons/DogFace"

const _Header = styled.header`
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
`

const _nav = styled.nav`
  height: 100%;
  max-width: 900px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`
export const CSS = {
  header: _Header,
  nav: _nav
}

export function Header() {

  return (
    <CSS.header>
      <CSS.nav>
        <DogFace/>
        <Link href="/login">Login / Criar</Link>
      </CSS.nav>
    </CSS.header>
  )
}