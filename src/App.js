import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import MovieContainer from './containers/movie'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/movies" component={MovieContainer} />
          <Redirect to="/movies" from="/" />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
