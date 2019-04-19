/* global document */
import './bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'

import 'typeface-roboto'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

ReactDOM.render(
  <>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
