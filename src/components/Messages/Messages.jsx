import React from "react";
import Message from "./Message/Message";
import moduleClasses from "./Messages.module.css"
import MessagesUserItem from "./MessagesUserItem/MessagesUserItem";

function Messages(props) {
    const messagesArray = props.messagesArray;
    const userArray = props.userArray;
    const addPost = props.addPost;
    const onChangeSetValue = props.onChangeSetValue;
    const currentTextAreaValue = props.currentTextAreaValue;    
    return (
        <div className={moduleClasses.mainContainer}>
            <h1>Dialogs</h1>
            <div className={moduleClasses.chatContainer}>
                <div className={moduleClasses.usersContainer}>
                    {
                        userArray.map((userObj) => <MessagesUserItem id={userObj.id} name={userObj.name} />)
                    }
                </div>
                <div className={moduleClasses.chatbox}>

                    <div className={moduleClasses.outherContainer}>
                        {
                            messagesArray.map(messageObj => <Message key={messageObj.id} className={moduleClasses.message} messageText={messageObj.messageText} />)
                        }

                    </div>

                    <textarea onChange={onChangeSetValue} value={currentTextAreaValue}></textarea>

                    <button onClick={addPost}>Добавить пост!</button>

                </div>
            </div>
        </div>
    )
}



export default Messages;