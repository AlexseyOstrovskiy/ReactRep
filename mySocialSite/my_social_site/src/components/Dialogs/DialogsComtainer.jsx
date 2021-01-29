import React from 'react';
import {addNewMessageActiomCreator, updateNewMessageTextActionCreator} from '../../redux/messsages-reducer';
import Dialogs from './Dialogs';
const DialogsComtainer = (props) => {
  
    let state = props.store.getState().messagesPage;
    let newTexMessage = props.store.getState().messagesPage.newTextMessage;
    let addNewMessage=()=>{
        props.store.dispatch(addNewMessageActiomCreator());
    }

    let onMessageChange =(newMessage) =>{
        props.store.dispatch(updateNewMessageTextActionCreator(newMessage));   
    }
  
    return (
        
        <Dialogs addNewMessage={addNewMessage} 
        updateNewMessageText={onMessageChange}
        newTextMessage = {newTexMessage}
        dialogsPage = {state}
        />
        
    )
}   

export default DialogsComtainer;