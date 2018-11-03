import { ADD_TO_LIST } from './constants'

const initialState = { messages: JSON.parse(localStorage.getItem('messages')) };

export const MessagesList = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TO_LIST:
      console.log(action, state);
      const messages = [...state.messages];
      const { autoGenerated, message } = action.item;
      messages.push({
        autoGenerated,
        message: autoGenerated ?
          'This is an auto generated message' : message
      });
      localStorage.setItem('messages', JSON.stringify(messages));
      return { messages };
    default:
      return state;
  }
}