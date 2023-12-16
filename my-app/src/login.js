// LoginPage.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


const LoginPage = () => {

  const userData = useSelector((state) => state.userReduce.users);
  const dispatch = useDispatch()
  console.log(userData)
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (Object.keys(userData).includes(email) && userData[email] === password) {
      dispatch({ type: 'setUser', payload: email })
      navigate('/todo');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">email</label>
          <input
            type="text"
            className="form-control col-md-6"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control col-md-6"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
        <p className="mt-3">
          New user?{' '}
          <Link to="/signup" className="btn btn-link">
            Sign Up
          </Link>
        </p>

      </form>
    </div>
  );
};

export default LoginPage;
