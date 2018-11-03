import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MainContainer, MessageList } from '../../components';
import Icon from '@material-ui/core/Icon';

const styles = {
  card: {
    minWidth: 350,
    maxWidth: 600,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxHeight: 800,
    height: 800
  },
  textField: {
    marginRight: 20
  }
};

class ChatPageUI extends React.Component {
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }
  render(){
    const { classes, message, messages, handleChange, onEnter, onKeyPress } = this.props;
    return (
      <MainContainer>
        <Card className={classes.card}>
          <div style={{ flex: 1, overflow: 'auto', boxShadow: 'none' }}>
            <MessageList messages={messages} />
            <div style={{ float:"left", clear: "both" }}
                ref={(el) => { this.messagesEnd = el; }}>
            </div>
          </div>
          <div style={{
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center',
          }}>
            <TextField
              style={{ flex: 1 }}
              className={classes.textField}
              id="outlined-name"
              label="Message"
              value={message}
              onChange={handleChange('message')}
              margin="normal"
              fullWidth
              variant="outlined"
              onKeyPress={onKeyPress}
            />
            <Button onClick={onEnter} variant="fab" style={{ backgroundColor: 'rgb(53, 150, 216)' }}>
              <Icon style={{ color: 'white' }}>send</Icon>
            </Button>
          </div>
        </Card>
      </MainContainer>
    )
  }
}
export default withStyles(styles)(ChatPageUI);