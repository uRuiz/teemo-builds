import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ChampionsContextProvider from './context/ChampionsContext'

ReactDOM.render(
  <React.StrictMode>
    <ChampionsContextProvider>
      <App />
    </ChampionsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
