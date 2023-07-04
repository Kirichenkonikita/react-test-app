const ADD_MESSAGE = `ADD_MESSAGE`;
const CHANGE_VALUE = `CHANGE_MESSAGE_
VALUE`

export function addMessageActionCreator() {
  return { type: ADD_MESSAGE };
}

export function onChangeSetValueActionCreator(event) {
  return {
    type: CHANGE_VALUE,
    event,
  };
}

const initialState = {
  messagesArray: [
    { id: `ma1`, messageText: `Привет!` },
    { id: `ma2`, messageText: `Привет, лунатики!` },
    { id: `ma3`, messageText: `Привет!` },
    { id: `ma4`, messageText: `Привет!` },
    { id: `ma5`, messageText: `Привет!` },
    { id: `ma6`, messageText: `Привет!` },
    { id: `ma7`, messageText: `Привет!` },
    { id: `ma8`, messageText: `Привет!` },
  ],

  userArray: [
    { id: `ua1`, name: `user1` },
    { id: `ua2`, name: `user2` },
    { id: `ua3`, name: `user333` },
    { id: `ua4`, name: `user4` },
    { id: `ua5`, name: `user5` },
    { id: `ua6`, name: `user6` },
    { id: `ua7`, name: `user7` },
  ],

  messagesComponentCurrentTextAreaValue: `krek`,
};

function messagesReducer(state = initialState, action) {
  switch (action.type) {

    case ADD_MESSAGE:
      return {
        ...state,
        messagesArray: [
          ...state.messagesArray,
          {
            id: 'ma' + Math.random(),
            messageText: state.messagesComponentCurrentTextAreaValue,
          },
        ],
        messagesComponentCurrentTextAreaValue: ``,
      }

    case CHANGE_VALUE:
      state.messagesComponentCurrentTextAreaValue = action.event.target.value;
      break;
    default: return state;
  }
  return state;
}

export default messagesReducer;