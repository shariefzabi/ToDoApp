import React from 'react';
import './style.css';
import store from './store/store.js';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { StudentTable } from './studentTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './login.js';
import SignupPage from './signup.js';
import Todo from './todo/todo.js';


export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          < Routes>
            <Route path="/" element={<LoginPage></LoginPage>} />
            <Route path="/signup" element={<SignupPage></SignupPage>} />
            <Route path="/todo/*" element={<Todo></Todo>} />


          </Routes>
        </Router>
      </div>

    </Provider>
  );
}
