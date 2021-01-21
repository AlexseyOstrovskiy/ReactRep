import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map((m) => <Message message={m.message} />);

    let addMessageRef = React.createRef();

    
    let addNewMessage=()=>{
        // props.addNewMessage();
        props.dispatch({type:'ADD-NEW-MESSAGE'});
    }

    let onMessageChange =() =>{
        let newMessage = addMessageRef.current.value;
        // props.updateNewMessageText(newMessage);
        props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', newMessage: newMessage});
       
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
                <textarea ref={addMessageRef} onChange={onMessageChange} value={props.state.newTextMessage}></textarea>
                <button onClick={addNewMessage}>Add message</button>
            </p>
            
        </div>
        
    )
}   

export default Dialogs;