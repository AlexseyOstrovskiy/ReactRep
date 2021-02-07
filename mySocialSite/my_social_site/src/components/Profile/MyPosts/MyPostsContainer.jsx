import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreater, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

// const MyPostsContainer = (props) => {

//   return (
//     <StoreContext.Consumer>{
//       (store) => {
//         let state = store.getState();
//         let addPost = () => {
//           store.dispatch(addPostActionCreater());
//         }
//         let onPostChange = (text) => {
//          store.dispatch(updateNewPostTextActionCreator(text));
//         }
//         return <MyPosts updateNewPostText={onPostChange}
//           addPost={addPost}
//           posts={state.profilePage.posts}
//           newPostText={state.profilePage.newPostText} />
//       }
//     }
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) =>{
  return{
    posts:state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
};
 let mapDispatchToProps = (dispatch) =>{
   return{
    updateNewPostText: (text) =>{
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () =>  {
      dispatch(addPostActionCreater());
    }
   }
 };
const MyPostsContainer =connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer; 