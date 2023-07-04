import { connect } from "react-redux";
import MyPosts from "./MyPosts";
import { addPostActionCreator, onChangeSetValueActionCreator } from '../../../redux/myPostsReducer';

function mapStateToProps(state) {
    return {
        myPostsArray: state.myPostsComponent.myPostsList, 
        myPostsCurrentTextAreaValue: state.myPostsComponent.myPostsCurrentTextAreaValue,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeSetValue(event) {
            dispatch(onChangeSetValueActionCreator(event));
        },
        addMessage() {
            dispatch(addPostActionCreator());
        }
    };
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;