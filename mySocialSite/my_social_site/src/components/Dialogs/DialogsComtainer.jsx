import React from 'react';
import {addNewMessageActiomCreator, updateNewMessageTextActionCreator} from '../../redux/messsages-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';
const DialogsComtainer = (props) => {
  
   
  
    return (
         <StoreContext.Consumer>{
        (store)=>{
            let state = store.getState().messagesPage;
            let newTexMessage = store.getState().messagesPage.newTextMessage;
            let addNewMessage=()=>{
                store.dispatch(addNewMessageActiomCreator());
            }
        
            let onMessageChange =(newMessage) =>{
                store.dispatch(updateNewMessageTextActionCreator(newMessage));   
            }
        return <Dialogs addNewMessage={addNewMessage} 
        updateNewMessageText={onMessageChange}
        newTextMessage = {newTexMessage}
        dialogsPage = {state}
        />
    }
    }
    </StoreContext.Consumer>
    )
}   

export default DialogsComtainer;