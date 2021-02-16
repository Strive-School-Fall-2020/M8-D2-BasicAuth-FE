import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import LoginComponent from "./LoginComponent"
import Profile from "./Profile"
import Books from "./AdminBooks"

class MainComponent extends React.Component {
  render() {
    return (
      <Router>
        <h1> Welcome to our app! Ready to login or register!</h1>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Link to="/login">Login</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/books">Books</Link>
        </div>
        <Switch>
          <Route path="/login">
            <LoginComponent />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default MainComponent
