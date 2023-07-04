import {combineReducers, legacy_createStore as createStore} from "redux";
import myPostsReducer from "./myPostsReducer";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";

const reducers = combineReducers({
    profileComponent: profileReducer,
    myPostsComponent: myPostsReducer,
    messagesComponent: messagesReducer,
});

const store = createStore(reducers);
export default store;