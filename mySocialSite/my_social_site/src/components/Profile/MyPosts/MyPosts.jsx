import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {
  // return <div className='posts' >
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
      <Post message='Hi, how are you?' like='10' />
      <Post message="It'is my first post!!!" like='15' />
    </div>

  </div>

}
export default MyPosts; 