import React from 'react';
import { connect } from 'react-redux';
import {addNewMessageActiomCreator, updateNewMessageTextActionCreator} from '../../redux/messsages-reducer';
import Dialogs from './Dialogs';

// const DialogsComtainer = (props) => {
// return (
//          <StoreContext.Consumer>{
//         (store)=>{
//             let state = store.getState().messagesPage;
//             let newTexMessage = store.getState().messagesPage.newTextMessage;
//             let addNewMessage=()=>{
//                 store.dispatch(addNewMessageActiomCreator());
//             }
        
//             let onMessageChange =(newMessage) =>{
//                 store.dispatch(updateNewMessageTextActionCreator(newMessage));   
//             }
//         return <Dialogs addNewMessage={addNewMessage} 
//         updateNewMessageText={onMessageChange}
//         newTextMessage = {newTexMessage}
//         dialogsPage = {state}
//         />
//     }
//     }
//     </StoreContext.Consumer>
//     )
// }   

let mapStateToProps = (state) =>{
    return {  
        dialogsPage:state.messagesPage,
        newTextMessage:state.messagesPage.newTextMessage
        // dialogsPage:state
    }
};
let mapDispatchToProps = (dispatch) =>{
    return {
        addNewMessage: () => {
            dispatch(addNewMessageActiomCreator())
        },
        updateNewMessageText: (newMessage)=>{
           dispatch(updateNewMessageTextActionCreator(newMessage));
        }
    }
};

const DialogsComtainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsComtainer;