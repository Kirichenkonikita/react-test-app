import messagesReducer from "./messagesReducer";
import myPostsReducer from "./myPostsReducer";

const store = {
  _callSubscriber: function() {},

  subscribe(func) {
    this._callSubscriber = func
  },

  getState() {
    return this.state;
  },

  state: {
    messagesComponent: {
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

      _messagesComponentCurrentTextAreaValue: `krek`,

      set messagesComponentCurrentTextAreaValue(value) {
        this._messagesComponentCurrentTextAreaValue = value;
      },

      get messagesComponentCurrentTextAreaValue() {
        return this._messagesComponentCurrentTextAreaValue;
      },
    },
    profileComponent: {
      myPostsComponent: {
        posts: [
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

        _myPostsCurrentTextAreaValue: `Текст нового поста`,

        set myPostsCurrentTextAreaValue(value) {
          this._myPostsCurrentTextAreaValue = value;
        },

        get myPostsCurrentTextAreaValue() {
          return this._myPostsCurrentTextAreaValue;
        },
      },
    },
  },

  dispatch(action) {
    this.state.messagesComponent = messagesReducer(this.state.messagesComponent, action);
    this.state.profileComponent.myPostsComponent = myPostsReducer(this.state.profileComponent.myPostsComponent, action)
    this._callSubscriber();
  },
};

store.dispatch = store.dispatch.bind(store)

window.store1 = store;
export default store;