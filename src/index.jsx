import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Feed from './pages/Feed'
import Inscription from'./pages/Inscription'
import Header from './components/Header'
import { createGlobalStyle } from 'styled-components'
import { store } from './redux/store'
import { Provider } from 'react-redux';


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
        <Provider store={store}>
        <Routes>
          <Route path='/register' element={<Inscription />}/>
          <Route path="/Feed" element={<Feed />} />
        </Routes>
        </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);