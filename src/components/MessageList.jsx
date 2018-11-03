import React from 'react';
import { MessageBox } from '../components';
import List from '@material-ui/core/List';

export const MessageList = (props) => {
  const { messages } = props;
  return (
    <List style={{ padding: 0, margin: 0 }} {...props}>
      {
        messages.map((each) => (
          <MessageBox {...each} />
        ))
      }
    </List>
  );
}

export default MessageList;
