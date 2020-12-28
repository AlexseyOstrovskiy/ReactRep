import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map((m) => <Message message={m.message} />);

    let addMessageRef = React.createRef();

    
    let addMessage=()=>{
        let textAddMesssage = addMessageRef.current.value;
        alert(textAddMesssage);
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
                <textarea ref={addMessageRef}></textarea>
                <button onClick={addMessage}>Add message</button>
            </p>
            
        </div>
    )
}

export default Dialogs;