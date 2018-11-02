import React, { Component } from 'react';
import './index.css';
import LoginPage from './pages/Login';
import ChatPage from './pages/Chat';
import { Router, Route, Redirect } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App" style={{
          height: '100%',
          width: '100%',
          display: 'flex'
        }}>
          <Route exact path={'/login'} component={LoginPage} />
          <Route exact path={'/home'} component={ChatPage} />
          <Redirect to={'/login'} />
        </div>
      </Router>
    );
  }
}

export default App;
