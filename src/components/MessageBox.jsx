import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export const MessageBox = (props) => {
  const { message, autoGenerated } = props;
  return (
    <ListItem>
      <ListItemText primary={autoGenerated ? 'Computer': 'Me'} secondary={message} />
      <ListItemIcon>
        <Avatar
          alt="Adelle Charles"
          src="https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png"
        />
      </ListItemIcon>
    </ListItem>
  );
}