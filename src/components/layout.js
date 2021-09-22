import * as React from "react"
import AppHeader from "./AppHeader"
import { GlobalStyle } from "./styles/GlobalStyles"
import Footer from "./Footer"

const Layout = ({ children }) => {


  return (
    <>
      <GlobalStyle />
      <AppHeader/>
      <main>{children}</main>
      <Footer/>

    </>
  )
}



export default Layout
