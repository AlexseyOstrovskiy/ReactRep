const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messageReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessageState = {
                id: state.messages.length + 1,
                message: state.newTextMessage
            };
            state.messages.push(newMessageState);
            state.newTextMessage = " ";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newTextMessage = action.newMessage;
            return state;
        default:
            return state;
    }

}

export const addNewMessageActiomCreator = () =>({type:ADD_NEW_MESSAGE})
export const updateNewMessageTextActionCreator =(newMessage)=>({type:UPDATE_NEW_MESSAGE_TEXT,newMessage: newMessage})
export default messageReducer;