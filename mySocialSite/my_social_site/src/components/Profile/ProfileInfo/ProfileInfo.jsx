import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import  s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>
  }
  return <div >
    <div>
      <img src='https://thumbs.dreamstime.com/b/%D0%BF%D1%80%D0%B5%D0%B4%D0%BF%D0%BE%D1%81%D1%8B%D0%BB%D0%BA%D0%B0-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D0%B8-%D0%B4%D1%80%D0%B5%D0%B2%D0%B5%D1%81%D0%BD%D0%BE%D0%B9-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8-%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D0%B0%D1%8F-%D0%BF%D0%BB%D0%B0%D0%BD%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D1%82%D0%B5%D0%BA%D1%81%D1%82%D1%83%D1%80%D1%8B-107185166.jpg' className={s.img}></img>
    </div>
    <div className={s.descriptionBloc}>
      <img src={props.profile.photos.large}/>
      <div className={s.fullNAmeStyle}>{props.profile.fullName}</div>
      <div className={s.aboutMe}>{props.profile.aboutMe}</div>
    </div>
  </div>
}
export default ProfileInfo; 