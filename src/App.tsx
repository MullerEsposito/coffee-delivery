import { ThemeProvider } from "styled-components"
import { Layout } from "./components/Layout"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Home } from "./pages/Home"

import "./config/wallet-connect"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <Home />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
