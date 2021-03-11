import { combineReducers, createStore } from "redux";
import profileReducer from '../redux/profile-reducer';
import sideBarReducer from '../redux/sideBar-rducer ';
import messageReducer from '../redux/messsages-reducer';
import usersReducer from '../redux/users-reducer';
import authReducer from "./auth-reducer";
let reducers = combineReducers({
    profilePage: profileReducer,
    sideBar:sideBarReducer,
    messagesPage:messageReducer,
    usersPage:usersReducer,
    auth:authReducer
})
let store = createStore(reducers);
window.store = store;
export default store;