import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/Dialogs';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogs =props.dialogs;
    
    // let dialogs = [
    //     { id: 1, name: 'Dimych' },
    //     { id: 2, name: 'Polya' },
    //     { id: 3, name: 'Ragnar' },
    //     { id: 4, name: 'Gertruda' },
    //     { id: 5, name: 'Zidan' },
    // ]

    let messages = [
        { id: 1, message: 'Hi, bro' },
        { id: 2, message: 'Bro, how are yuo?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Brooo!' },
        { id: 5, message: 'Good idea!' },

    ]
    
    let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map((m) => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

                {dialogsElements}
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} /> */}


            </div>
            <div className={s.messages}>
                {messagesElements}
                {/* <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} /> */}

            </div>
        </div>
    )
}

export default Dialogs;