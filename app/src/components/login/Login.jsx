import './login.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div className="login-container">
      <div className="form-container">
      <h2>Login</h2>
      <form>
        <label>User</label>
        <br />
        <input type="text" placeholder='User'/>
        <br/>
        <label>Password</label>
        <br />
        <input type="password" placeholder='Password'/>
        <br/>
        <br />
        <button className='bt1'>Sing in</button>
        <button>Create user</button>
      </form>
      </div>
    </div>
  );
}

export default Login;
