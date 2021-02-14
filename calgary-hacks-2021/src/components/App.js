import React from "react"
import './App.css'
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Dashboard from "./Dashboard"
import Chat from "./Chat"
import Profile from "./Profile"


function App() {
  return (
        <div className="App">
          <Router>
            <AuthProvider>
              <Switch>
                <Route exact path="/" component={Nav} />
                <Route path="/profile" component={Profile} />
                <Route path="/chat" component={Chat} />
                <Route path="/dashboard" component={Dashboard} />
                <div className="w-100" style={{ maxWidth: "400px" }}>
                  <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }} >
                    <Route path="/signup" component={Signup} />
                    {/*<Route path="/login" component={Login} />*/}
                  </Container>
                </div>
              </Switch>
            </AuthProvider>
          </Router>
        </div>

  )
}

export default App;
