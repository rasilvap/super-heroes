import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'

const AuthContext = React.createContext()

const App = () => {
  return (
    <AuthContext.Provider
      value={{
        login: () => {},
        logout: () => {},
        auth: {
          token: '',
          expired_at: '',
        },
        user: '',
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <div>About</div>
          </Route>
          <Route path="/dashboard">
            <div>Dash</div>
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
