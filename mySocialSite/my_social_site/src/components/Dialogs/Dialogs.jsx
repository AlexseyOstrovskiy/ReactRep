import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
let path = "/dialogs/" + props.id;
return(
    <div className={s.dialog + ' ' + s.active}>
    <NavLink to ={path}> {props.name} </NavLink>
 </div>
)
}

const Message = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
               <DialogItem name='Dimych' id ='1' />
               <DialogItem name='Polya' id ='2' />
               <DialogItem name='Ragnar' id ='3' />
               <DialogItem name='Gertruda' id ='4' />
               <DialogItem name='Zidan' id ='5' />
               
            </div>
            <div className={s.messages}>
                <Message message = 'Hi, bro' />
                <Message message = 'Bro, how are yuo?' />
                <Message message = "I'm fine!Thnks!" />
            </div>
        </div>
    )
}

export default Dialogs;