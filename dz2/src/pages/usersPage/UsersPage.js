import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersAction} from "../../redux/actions";
import Card from "../../components/card/Card";

const UsersPage = () => {
    const dispatch= useDispatch()
    const users= useSelector(state => state.usersReducer.users)
    const getUsers = () => {
        dispatch(fetchUsersAction())
    }
    return (
        <div>
            <button onClick={getUsers}>get users</button>
            <div style={{display:"flex",flexWrap:"wrap"}}>
                {users.map((user, idx) => (
                    <Card cardInfo={user} key={idx} />
                ))}
            </div>
        </div>
    );
};

export default UsersPage;