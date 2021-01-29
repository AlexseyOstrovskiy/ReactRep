import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import {addPostActionCreater, updateNewPostTextActionCreator} from './../../../redux/profile-reducer';

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => <Post message={p.post} like={p.like} />);

  let newPostElement=React.createRef(); 

  let onAddPost  = () =>{
    props.addPost();
    // props.dispatch(addPostActionCreater());
    
  }

  let onPostChange = () =>{
    let text=newPostElement.current.value;
    props.updateNewPostText(text);
    // props.dispatch(updateNewPostTextActionCreator(text));
  }


  return <div className={s.postsBlock} >
    <h3> My post</h3>
    <div>
      <div>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
      </div>
      <div>
        <button onClick={onAddPost}>add Post</button>
      </div>
    </div>

    <div className={s.posts}>
      {/* <Post message={postsData[0].post} like={postsData[0].like}/>
      <Post message={postsData[1].post} like={postsData[1].like} /> */}
      {postElements}
    </div>

  </div>

}
export default MyPosts; 