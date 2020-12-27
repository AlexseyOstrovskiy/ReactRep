import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => <Post message={p.post} like={p.like} />);

  return <div className={s.postsBlock} >
    <h3> My post</h3>
    <div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>add Post</button>
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