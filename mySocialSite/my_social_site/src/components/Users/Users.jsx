import React from 'react';
import s from './users.module.css';
import userPhotoImg from '../../assets/img/user.jpg';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
   
    var a;
    var b;
    var c;
    var d;
    var e;
    var f;
    
    let pagesSix = (a,b,c,d,e,f ) => {  
      
        console.log("pageSix" + a);
      
        return <div>
            <a href="#" className={props.currentPage === a && s.selectedPage} onClick={(e) => { props.onPageChanged(a) }}>{a}</a>
            <a href="#" className={props.currentPage === b && s.selectedPage} onClick={(e) => { props.onPageChanged(b) }}>{b}</a>
            <a href="#" className={props.currentPage === c && s.selectedPage} onClick={(e) => { props.onPageChanged(c) }}>{c}</a>
            <a href="#" className={props.currentPage === d && s.selectedPage} onClick={(e) => { props.onPageChanged(d) }}>{d}</a>
            <a href="#" className={props.currentPage === e && s.selectedPage} onClick={(e) => { props.onPageChanged(e) }}>{e}</a>
            <a href="#" className={props.currentPage === f && s.selectedPage} onClick={(e) => { props.onPageChanged(f) }}>{f}</a>
        </div>
    }

    

          
    return <div>
        {/* <div className={s.stylePagination}>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={(e) => { props.onPageChanged(p) }}
                >{p}</span>
            })}
        </div> */}


        <div className={s.pagination} >
            <a href="#" >&laquo;</a>
            <div>{
                // a=1, b=2, c=3, d=4, e=5, f=6,
                //  pagesSix(a,b,c,d,e,f)
                pagesSix(1,2,3,4,5,6)
                }</div>
                <a href="#" onClick={
                    (e) => {            
                        pagesSix(11,22,33,44,55,66)
                      
                        }}>&raquo;</a>
        </div>


        {/*         
      <div className={s.pagination} >
  <a href="#">&laquo;</a>
  <a href={}>1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">&raquo;</a>
</div> */}
        {
            props.users.map(
                u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photo.small : userPhotoImg} className={s.userPhoto} />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed ?
                                    <button onClick={() => { props.unfollow(u.id) }}  >Unfollow</button> :
                                    <button onClick={() => { props.follow(u.id) }} >Follow</button>}

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>

                    </div>
            )
        }
    </div>
}

export default Users;