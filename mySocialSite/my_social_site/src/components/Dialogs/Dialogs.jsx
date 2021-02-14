import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {addNewMessageActiomCreator, updateNewMessageTextActionCreator} from './../../redux/messsages-reducer';

const Dialogs = (props) => {
    let state = props.dialogsPage;
   
    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id} />);

    let addMessageRef = React.createRef();

    
    let addNewMessage=()=>{
        props.addNewMessage();
    }

    let onMessageChange =() =>{
        let newMessage = addMessageRef.current.value;
         props.updateNewMessageText(newMessage);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems} >
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

            <p>
                <textarea ref={addMessageRef} onChange={onMessageChange} value={props.newTextMessage}></textarea>
                <button onClick={addNewMessage}>Add message</button>
            </p>
            
        </div>
        
    )
}   

export default Dialogs;