import { ReactNode } from "react";
import { Footer } from "../footer";
import { Header } from "../header";

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main style={{
        margin: "4rem 0 0 0",
        minHeight: "80vh",
        display: "flex",
        width: "100%"
        }}>{children}</main>
      <Footer />
    </>
  )
}