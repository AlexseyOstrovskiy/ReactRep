const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
      { id: 1, post: 'Hi, how are you?', like: 10 },
      { id: 2, post: 'It\'is my first post!!!', like: 15 }
    ],  
    newPostText: 'it-Kamasutra'
  };

const profileReducer =(state = initialState, action) =>{
    switch(action.type ){
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                like: 0
              };
              state.posts.push(newPost);
              state.newPostText = " ";
              return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreater =()=>({type:ADD_POST})
export const updateNewPostTextActionCreator =(text)=>({type:UPDATE_NEW_POST_TEXT,newText:text})
export default profileReducer;