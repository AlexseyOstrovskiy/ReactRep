import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import  s from './Profile.module.css';


const Profile = () => {
  return <div className={s.content}>
    <div>
      <img src='https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg'></img>
    </div>
    <div>
      ava+description
    </div>
    <MyPosts/>
  </div>
}
export default Profile; 