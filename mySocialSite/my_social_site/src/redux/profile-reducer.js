const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    posts: [
      { id: 1, post: 'Hi, how are you?', like: 10 },
      { id: 2, post: 'It\'is my first post!!!', like: 15 }
    ],  
    newPostText: 'it-Kamasutra',
    profile:null
  };

const profileReducer =(state = initialState, action) =>{
    switch(action.type ){
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                like: 0
              };
              return{
                ...state,
                posts:[...state.posts, newPost],
                newPostText: ' '
              };
              // stateCopy.posts = [...state.posts];
              // stateCopy.posts.push(newPost);
              // stateCopy.newPostText = " ";
             
        case UPDATE_NEW_POST_TEXT:
          return {
            ...state,
            newPostText : action.newText
          };
          // stateCopy.newPostText = action.newText;
          case SET_USER_PROFILE:
            return {
              ...state,
              profile: action.profile
            };
          
        default:
            return state;
            }
    }


export const addPostActionCreater =()=>({type:ADD_POST})
export const updateNewPostTextActionCreator =(text)=>({type:UPDATE_NEW_POST_TEXT,newText:text})
export const setUserProfile =(profile) =>({type:SET_USER_PROFILE, profile})
export default profileReducer;