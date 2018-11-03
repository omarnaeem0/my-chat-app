import React from 'react';
import { MessageBox } from '../components';
import List from '@material-ui/core/List';

export const MessageList = (props) => {
  const { messages } = props;
  return (
    <List style={{ padding: 0, margin: 0 }} {...props}>
      {
        messages !== null ? messages.map((each, index) => (
          <MessageBox key={index} {...each} />
        )) : null
      }
    </List>
  );
}

export default MessageList;
