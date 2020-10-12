import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} src={d.src}/>)

    let incomeMessages = props.state.messages.income.map(m => <Message message={m.message}/>)

    let outgoingMessages = props.state.messages.outgoing.map(m => <Message message={m.message}/>)

    let newMessage = React.createRef();

    let sandMessage = () => {
        props.dispatch({type: 'SAND-MESSAGE'});
    }

    let onChangeMessage = () => {
        let text = newMessage.current.value;
        props.dispatch({type: 'UPDATE-MESSAGE', newMessageText: text});
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {incomeMessages}
            </div>
            <div className={s.messages}>
                {outgoingMessages}
                <div>
                    <textarea ref={newMessage}
                              onChange={onChangeMessage}
                              value={props.state.newMessage}/>
                </div>
                <div>
                    <button onClick={sandMessage}>Sand message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;