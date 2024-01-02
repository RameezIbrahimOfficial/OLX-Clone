import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';

import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
  const history = useHistory();
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [password, setpassword] = useState('')

  const {firebase} = useContext(FirebaseContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({displayName:username})
          .then(() => {
            firebase.firestore().collection('users').add({
              id: result.user.uid,
              username: username,
              phonenumber: phonenumber
            })
              .then(()=> {
                history.push("/login")
              })
          })
      })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='logo'></img>
        <form>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            id="fname"
            name="name"
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phonenumber}
            onChange={e => setPhonenumber(e.target.value)}
            id="phonenumber"
            name="phone"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={e => setpassword(e.target.value)}
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button onClick={handleSubmit}>Signup</button>
        </form>
        <a href='/login'>Login</a>
      </div>
    </div>
  );
}
