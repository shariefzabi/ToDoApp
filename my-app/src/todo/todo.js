import React from 'react';
import TodoForm from "./createTodo"
import ViewTodo from './viewTodo';
import './todo.css'
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, NavLink, Link } from 'react-router-dom';



export default function Todo() {
    const user = useSelector((state) => state.userReduce.currentUser).slice(0, 1);

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
                    <div>
                        <div className='profile'>{user}</div>
                        <Link to='/'>Sign out</Link>
                    </div>
                </ul>

            </nav>
            <Routes>
                <Route path="/" element={<TodoForm></TodoForm>} />
                <Route path="/viewTodo" element={<ViewTodo></ViewTodo>} />
            </Routes>
        </>




    )
}