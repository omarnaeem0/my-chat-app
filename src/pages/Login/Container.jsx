import React from 'react';
import LoginUI from './UI';

class LoginPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    })
  }
  onClick() {
    if (this.state.userName === 'admin' && this.state.password === 'admin') {
      console.log(this.props);
      this.props.history.push('/home')
    } else {
      this.setState({ 'error': 'Incorrect User Name / Password' });
      setTimeout(() => {
        this.setState({ error: '' })
      }, 3000)
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <LoginUI {...this.state} onClick={this.onClick} handleChange={this.handleChange}/>
    )
  }
}
export default LoginPageContainer;