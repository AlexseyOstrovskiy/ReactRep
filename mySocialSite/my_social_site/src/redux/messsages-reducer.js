const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState =  {
    dialogs: [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Polya' },
      { id: 3, name: 'Ragnar' },
      { id: 4, name: 'Gertruda' },
      { id: 5, name: 'Zidan' },
    ],
    messages: [
      { id: 1, message: 'Hi, bro' },
      { id: 2, message: 'Bro, how are yuo?' },
      { id: 3, message: 'Yo' },
      { id: 4, message: 'Brooo!' },
      { id: 5, message: 'Good idea!' },
    ],
    newTextMessage: 'new text message !!!!!!!!!!'
  };

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:{
            let newMessageState = {
                id: state.messages.length + 1,
                message: state.newTextMessage
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessageState);
            stateCopy.newTextMessage = [...state.newTextMessage];
            stateCopy.newTextMessage = " ";
            return stateCopy;
          }
        case UPDATE_NEW_MESSAGE_TEXT:{
          let stateCopy = {...state}; 
          stateCopy.newTextMessage = action.newMessage;
            return stateCopy;
          }
        default:
            return state;
    }

}

export const addNewMessageActiomCreator = () =>({type:ADD_NEW_MESSAGE})
export const updateNewMessageTextActionCreator =(newMessage)=>({type:UPDATE_NEW_MESSAGE_TEXT,newMessage: newMessage})
export default messageReducer;