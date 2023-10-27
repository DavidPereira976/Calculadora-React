import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './components/Main'
import MyGlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
    <MyGlobalStyles/>
  </React.StrictMode>,
)
