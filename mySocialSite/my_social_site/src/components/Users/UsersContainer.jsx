import React from 'react';
import Users from '../Users/Users'
import { connect } from 'react-redux';
let mapStateToProps =(state) =>{
    return{
        users:state.usersPage.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users);