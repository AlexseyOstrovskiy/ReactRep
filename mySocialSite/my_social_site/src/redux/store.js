import profileReducer from './profile-reducer';
import sideBarReducer from './sideBar-rducer ';
import messageReducer from './messsages-reducer'; 


let store = {
   _state:  {
    profilePage: {
      posts: [
        { id: 1, post: 'Hi, how are you?', like: 10 },
        { id: 2, post: 'It\'is my first post!!!', like: 15 }
      ],  
      newPostText: 'it-Kamasutra'
    },
  
    messagesPage: {
      dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Polya' },
        { id: 3, name: 'Ragnar' },
        { id: 4, name: 'Gertruda' },
        { id: 5, name: 'Zidan' },
      ],
      messages: [
        { id: 1, message: 'Hi, bro' },
        { id: 2, message: 'Bro, how are yuo?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Brooo!' },
        { id: 5, message: 'Good idea!' },
      ],
      newTextMessage: 'new text message !!!!!!!!!!'
    },

    sideBar: {}
  },
  getState(){
    return this._state;
  },
  _callSubscriber() {
    console.log('state changed')
    },
  subscribe(observer) {
    this._callSubscriber = observer;
    },
  // addPost(){
  //     let newPost = {
  //       id: 5,
  //       post: this._state.profilePage.newPostText,
  //       like: 0
  //     };
  //     this._state.profilePage.posts.push(newPost);
  //     this._state.profilePage.newPostText = " ";
  //     this._callSubscriber(this._state);
  //   },
  // updateNewPostText(newText){
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  //   },
//  addNewMessage () {
//       let newMessageState = {
//         id: this._state.messagesPage.messages.length + 1,
//         message: this._state.messagesPage.newTextMessage
//       };
//       this._state.messagesPage.messages.push(newMessageState);
//       this._state.messagesPage.newTextMessage = " ";
//       this._callSubscriber(this._state);
//     },
// updateNewMessageText(newMessage){
//   this._state.messagesPage.newTextMessage = newMessage;
//   this._callSubscriber(this._state);
//     }, 
    
    dispatch(action){

      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.sideBar = sideBarReducer(this._state.sideBar, action);
      this._state.messagesPage = messageReducer(this._state.messagesPage, action);

      this._callSubscriber(this._state);

      // if (action.type === ADD_POST){
      //   let newPost = {
      //     id: 5,
      //     post: this._state.profilePage.newPostText,
      //     like: 0
      //   };
      //   this._state.profilePage.posts.push(newPost);
      //   this._state.profilePage.newPostText = " ";
      //   this._callSubscriber(this._state);
      // }
      // else if (action.type === UPDATE_NEW_POST_TEXT){
      //   this._state.profilePage.newPostText = action.newText;
      //   this._callSubscriber(this._state);
      // }
      // else if(action.type === ADD_NEW_MESSAGE){
      //   let newMessageState = {
      //     id: this._state.messagesPage.messages.length + 1,
      //     message: this._state.messagesPage.newTextMessage
      //   };
      //   this._state.messagesPage.messages.push(newMessageState);
      //   this._state.messagesPage.newTextMessage = " ";
      //   this._callSubscriber(this._state);
      // }
      // else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
      //   this._state.messagesPage.newTextMessage = action.newMessage;
      //   this._callSubscriber(this._state);
      // }
    }
}




window.store = store;
export default store;