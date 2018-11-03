import React from 'react';
import { MessageBox } from '../components';
import List from '@material-ui/core/List';

export const MessageList = (props) => {
  const { messages } = props;
  console.log(messages);
  return (
    <List style={{ padding: 0, margin: 0 }} {...props}>
      {
        messages !== null ? messages.map((each) => (
          <MessageBox {...each} />
        )) : null
      }
    </List>
  );
}

export default MessageList;
