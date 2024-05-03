import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card/Card";
import { fetchUsers } from "../../store/PostsSlice";

const UsersPage = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)

    const getUsers = () => {
        dispatch(fetchUsers())
    };

    return (
        <div>
            <button onClick={getUsers}> get users </button>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {users.map((user, idx) => (
                    <Card cardInfo={user} key={idx} />
                ))}
            </div>
        </div>
    )
}

export default UsersPage;
