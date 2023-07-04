const CHANGE_VALUE = `CHANGE_POST_VALUE`;
const ADD_POST = `ADD_POST`;

export function onChangeSetValueActionCreator(event) {
    return { type: CHANGE_VALUE, event };
}
export function addPostActionCreator() {
    return { type: ADD_POST };
}

const initialState = {
    myPostsList: [
        {
            id: `mp1`,
            text: `Привет, первый`,
        },
        {
            id: `mp2`,
            text: `Привет, второй`,
        },
        {
            id: `mp3`,
            text: `Привет, третий`,
        },
    ],

    myPostsCurrentTextAreaValue: `Текст нового поста`,
};


function myPostsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                myPostsList: [
                    ...state.myPostsList,
                    {
                        id: "mp" + Math.random(),
                        text: state.myPostsCurrentTextAreaValue,
                    },
                ],
                myPostsCurrentTextAreaValue: ``,
            }
        case CHANGE_VALUE:
            const currentTextAreaValue = action.event.target.value;
            state.myPostsCurrentTextAreaValue = currentTextAreaValue;
            break;
        default:
            break;
    }
    return state;
}


export default myPostsReducer;