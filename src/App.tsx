import {Outlet} from 'react-router-dom'
import Header from './shared/Header'
import Footer from './shared/Footer'
import GlobalStyle from './styles/global'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from './utils/usePersistedState'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>

      <main className="App">
          <GlobalStyle />
          <Header toggleTheme={toggleTheme}/>
          <Outlet />
          <Footer/>
      </main>

    </ThemeProvider>
  )
}

export default App
  