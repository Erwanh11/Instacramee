import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Feed from './pages/Feed'
import Header from './components/Header'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
      font-family: Arial, sans-serif;
    }

   body {
        background-color: #fafafa;
         margin: 0;
        padding: 0;
}

`

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Header />
        <GlobalStyle />
        <Routes>
          <Route path="/Feed" element={<Feed />} />
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);