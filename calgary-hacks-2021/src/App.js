import React from 'react';
import './App.css';
import Nav from './Nav';
import Profile from './Profile';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/profile" component={Profile}/>
          <Route path="/chat" component={Chat}/>
          <h1>Main Page!</h1>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
 