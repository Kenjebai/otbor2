import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsersDel } from "../store/userSlice";

function User({name, id}){

    const dispatch = useDispatch()

    const { users } = useSelector(state => state.usersReducer)

    const deleteName = () => {
        dispatch(addUsersDel(users))
    }

    return(
        <div className="todo2">
            <p>{id}{name}</p>
            <button className="btn" onClick={deleteName}>Delete</button>
        </div>
    )
}   

export default User