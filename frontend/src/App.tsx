import React from 'react'
import './App.css'
import Base from './components/Base'
import { createTheme, ThemeProvider } from '@mui/material'
import { blue, purple } from '@mui/material/colors'
import { BrowserRouter } from 'react-router-dom'


const theme = createTheme({
  palette: {
    primary: blue,
    secondary: purple
  }
})


const App = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Base />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
