import PageRoutes from "pages"
import React from "react"
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
 ${reset}
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <PageRoutes />
    </>
  )
}

export default App
