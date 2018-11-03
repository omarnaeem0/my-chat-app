import React from 'react';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MainContainer } from './../../components';

const styles = {
  card: {
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 80,
    height: 80,
  },
  textField: {
  },
  button: {
    marginTop: 20
  },
  error: {
    color: 'red'
  }
};

const LoginPageUI = (props) => {
  const { classes, userName, password, handleChange, error, onClick } = props;
  return (
    <MainContainer>
      <Card className={classes.card}>
        <Avatar
          alt="Adelle Charles"
          src="https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png"
          className={classNames(classes.avatar, classes.bigAvatar)}
        />
        <Typography component="h2" variant="h6" gutterBottom>
          USER LOGIN
        </Typography>
        <TextField
          className={classes.textField}
          id="outlined-name"
          label="User Name"
          value={userName}
          onChange={handleChange('userName')}
          margin="normal"
          fullWidth
        />
        <TextField
          className={classes.textField}
          id="outlined-name"
          label="Password"
          value={password}
          onChange={handleChange('password')}
          type="password"
          autoComplete="current-password"
          margin="normal"
          fullWidth
        />
        <Typography component="h2" variant="body1" gutterBottom className={classes.error}>
          {error}
        </Typography>
        <Button
          variant="outlined"
          size="large"
          className={classes.button}
          onClick={onClick}
        >
          Login
        </Button>
      </Card>
    </MainContainer>
  )
}
export default withStyles(styles)(LoginPageUI);