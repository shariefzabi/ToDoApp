import React from 'react';
import TodoForm from "./createTodo"
import ViewTodo from './viewTodo';
import './todo.css'
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, NavLink } from 'react-router-dom';



export default function Todo() {
    const user = useSelector((state) => state.userReduce.currentUser).slice(0, 4);

    return (
        <>
            <nav className="navbar">
                <ul className="flexContainer">
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"

                            to={`/todo`}>Create ToDo</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to={`/todo/viewTodo`}>View ToDos</NavLink>
                    </li>
                    <p className='profile'>Welcome {user}</p>
                </ul>

            </nav>
            <Routes>
                <Route path="/" element={<TodoForm></TodoForm>} />
                <Route path="/viewTodo" element={<ViewTodo></ViewTodo>} />
            </Routes>
        </>




    )
}