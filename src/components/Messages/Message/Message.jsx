import moduleClasses from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={moduleClasses.message}>{props.messageText}</div>
    )
}

export default Message;