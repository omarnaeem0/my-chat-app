import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './index.css';
import LoginPage from './pages/Login';
import ChatPage from './pages/Chat';
import { Router, Route, Redirect } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import { createStore } from 'redux';
import { MessagesList } from './redux/reducers';

const store = createStore(MessagesList);
const history = createBrowserHistory();

class App extends Component {
  render() {
    const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    return (
      <Provider store={store} >
        <Router history={history}>
          <div className="App" style={{
            height: '100%',
            width: '100%',
            display: 'flex'
          }}>
            <Route exact path={'/login'} component={LoginPage} />
            <Route exact path={'/home'} component={ChatPage} />
            <Redirect to={loggedIn ? '/home' : '/login'} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
