const initialState = {};

function profileReducer(state = initialState, action) {
    state = structuredClone(state);
    return state;
}

export default profileReducer;