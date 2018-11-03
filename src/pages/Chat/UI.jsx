import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MainContainer, MessageBox } from '../../components';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';

const styles = {
  card: {
    minWidth: 350,
    maxWidth: 600,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxHeight: '800px'
  },
  textField: {
    marginRight: 20
  }
};

const ChatPageUI = (props) => {
  const { classes, message, messages, handleChange, onEnter, onKeyPress } = props;
  return (
    <MainContainer>
      <Card className={classes.card}>
        <div style={{ flex: 1, overflow: 'auto', boxShadow: 'none' }}>
          <List style={{ padding: 0, margin: 0 }}>
            {
              messages.map((each) => (
                <MessageBox {...each} />
              ))
            }
          </List>
        </div>
        <div style={{
          flexDirection: 'row',
          display: 'flex',
          alignItems: 'center',
          height: 500
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
export default withStyles(styles)(ChatPageUI);