import React from "react"
import './App.css'
import Signup from "./Signup";
import Login from "./Login";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from "./Dashboard"
import Chat from "./Chat"
import Profile from "./Profile"


function App() {
  return (
        <div className="App">
          <Router>
            <AuthProvider>
              <Switch>
                <Route exact path={["/", "/dashboard"]} component={Dashboard} />
                <Route path="/profile" component={Profile} />
                <Route path="/chat" component={Chat} />
                <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }} >
                  <div className="w-100" style={{ maxWidth: "400px" }}>
                      <Route path="/signup" component={Signup} />
                      <Route path="/login" component={Login} />
                  </div>
                </Container>
              </Switch>
            </AuthProvider>
          </Router>
        </div>

  )
}

export default App;
