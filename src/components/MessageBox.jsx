import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export const MessageBox = (props) => {
  const { message, autoGenerated } = props;
  const MyAvatar = (
    <Avatar
      alt="Adelle Charles"
      src="https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png"
    />
  );
  return (
    <ListItem>
      {autoGenerated ? MyAvatar : null}
      <ListItemText primary={autoGenerated ? 'Computer' : 'Me'} style={{ textAlign: autoGenerated ? 'left': 'right' }} secondary={message} />
      {!autoGenerated ? MyAvatar : null}
    </ListItem>
  );
}