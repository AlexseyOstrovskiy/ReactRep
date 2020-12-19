import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {
  let posts = [
    { id: 1, post: 'Hi, how are you?' , like: 10},
    { id: 2, post: 'It\'is my first post!!!', like: 15}
]

let postElements = posts.map((p) => <Post message={p.post} like={p.like}/>);

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