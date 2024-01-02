import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/')
      })
      .catch((error)=>{
        alert(error.message)
      })
  }

return (
  <div>
    <div className="loginParentDiv">
      <img width="200px" height="200px" src={Logo} alt='logo'></img>
      <form>
        <label htmlFor="fname">Email</label>
        <br />
        <input
          className="input"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          id="email"
          name="email"
        />
        <br />
        <label htmlFor="lname">Password</label>
        <br />
        <input
          className="input"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          id="password"
          name="password"
        />
        <br />
        <br />
        <button onClick={handleLogin}>Login</button>
      </form>
      <a href='/signup'>Signup</a>
    </div>
  </div>
);
}

export default Login;
