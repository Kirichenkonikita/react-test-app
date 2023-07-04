
import { connect } from "react-redux";
import {addMessageActionCreator, onChangeSetValueActionCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";

function mapStateToProps(state) {
    return {
        messagesArray: state.messagesComponent.messagesArray,
        userArray: state.messagesComponent.userArray,
        currentTextAreaValue: state.messagesComponent.messagesComponentCurrentTextAreaValue,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addPost() {
            dispatch(addMessageActionCreator());
        },
        onChangeSetValue(event) {
            dispatch(onChangeSetValueActionCreator(event));
        }
    };
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;