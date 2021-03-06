import React from 'react';
import ChatUI from './UI';
import { connect } from 'react-redux'

class ChatPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      intervalId: undefined
    };
    this.handleChange = this.handleChange.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }
  componentDidMount() {
    const intervalId = setInterval(() => {
      this.onEnter(true)();
    }, 15000);
    this.setState({ intervalId });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    })
  }
  onEnter = (autoGenerated) => () => {
    if (this.state.message || autoGenerated) {
      this.props.addToList({ autoGenerated, message: this.state.message });
      this.setState({
        message: autoGenerated ? this.state.message : ''
      });
    }
  }
  onLogout(){
    this.props.history.push('/login');
    localStorage.setItem('loggedIn', JSON.stringify(false));
  }
  onKeyPress(ev) {
    if (ev.key === 'Enter') {
      this.onEnter(false)();
    }
  }
  render() {
    return (
      <ChatUI
        {...this.props}
        {...this.state}
        messages={this.props.messages}
        handleChange={this.handleChange}
        onEnter={this.onEnter(false)}
        onKeyPress={this.onKeyPress}
        onLogout={this.onLogout}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addToList: ({ autoGenerated, message }) =>
      dispatch({
        type: 'ADD_TO_LIST',
        item: {
          autoGenerated,
          message
        }
      })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPageContainer);
