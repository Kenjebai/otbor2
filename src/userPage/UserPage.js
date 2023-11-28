import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, changeInput } from "../store/userSlice";
import User from "../components/User";

function UserPage(){

    const dispatch = useDispatch()

    const { users, inputValue } = useSelector(state => state.usersReducer)

    const changeInputFunc = (event) => {
        dispatch(changeInput(event.target.value))
    }

    const addUserFunc = () => {
        dispatch(addUsers(inputValue))
    }

    return(
        <div className="todo">
            <h1>To-Do List</h1>
            <div>
                 <input value={inputValue} onChange={changeInputFunc} placeholder="Enter a task" />
            <button onClick={addUserFunc}>Add Task</button>
            </div>
           
            <h2>Tasks</h2>
            {users.map((user, index) => <User name={user} id={index} /> )}
        </div>
    )
}

export default UserPage