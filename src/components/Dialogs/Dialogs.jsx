import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    let dialogs = [
        {id : 1, name : 'Dimych'},
        {id : 2, name : 'Bro'},
        {id : 3, name : 'Natali'},
        {id : 4, name : 'Martin'},
        {id : 5, name : 'Alex'}
    ]

    let messages = [
        {id : 1, message : 'Hi, how are you?'},
        {id : 2, message : 'I don\'t know'},
        {id : 3, message : 'Ok bro'},
        {id : 4, message : 'U2'}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = messages.map( m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;