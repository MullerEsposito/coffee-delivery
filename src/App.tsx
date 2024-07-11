import { ThemeProvider } from "styled-components"
import { Layout } from "./components/Layout"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        HOME
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
