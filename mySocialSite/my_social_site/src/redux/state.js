import { rerenderEntireTree } from '../render';

let state = {
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
    ]
  }

}

export let addPost = () => {
  let newPost = {
    id: 5,
    post: state.profilePage.newPostText,
    like: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = " ";
  rerenderEntireTree(state);
}


export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export let addNewMessage = (newMessage) => {
  let newMessageState = {
    id: state.messagesPage.messages.length + 1,
    message: newMessage
  };
  state.messagesPage.messages.push(newMessageState);
  rerenderEntireTree(state);


}



export default state;