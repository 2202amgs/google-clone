import './App.css'
import React from 'react'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/about">
            <h1>this is about page</h1>
          </Route>
          <Route path="/store">
            <h1>this is store page</h1>
          </Route>
          <Route path="/images">
            <h1>this is images page</h1>
          </Route>
          <Route path="/gmail">
            <h1>this is gmail page</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
