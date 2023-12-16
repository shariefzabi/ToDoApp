// SignupPage.js
import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
const SignupPage = () => {
    const [email, setemail] = useState('');
const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const userData = useSelector((state) => state.ToDoReducer);
  const [isExistingUser, setIsExistingUser] = useState(false);

  const checkIfExistingUser = () => {
    if (Object.keys(userData).includes(email)) {
      setIsExistingUser(true);
    }
    else{
        handleSignup() 
    }
  }

  const handleSignup = () => {
 
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      {isExistingUser && (
        <div className="alert alert-warning" role="alert">
          You are an existing user.{' '}
          <Link to="/login" className="alert-link">
            Click here to Login
          </Link>
        </div>
      )}
      <form>
      <div className="mb-3">
          <label htmlFor="email" className="form-label">email</label>
          <input
            type="text"
            className="form-control col-md-6"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            onBlur={checkIfExistingUser}
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
        <button
          type="button"
          className="btn btn-primary"
          onClick={checkIfExistingUser}
        >
          Sign Up
        </button>
        <p className="mt-3">
          Already have an account?{' '}
          <Link to="/" className="btn btn-link">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
