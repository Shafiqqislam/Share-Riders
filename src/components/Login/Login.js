import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext, useState } from 'react';
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import './Login.css';
import { Link } from "react-router-dom";
import Header from "../Header/Header";


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    newUser: false,
    name: '',
    email: '',
    password: '',
    photo: ''

  });
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  const history=useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/destination" } };


  const handleBlur = (event) => {
    let isFieldValid = true;
    if (event.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value)
    } if (event.target.name === 'password') {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);

    }
  }
  const handleSubmit = (event) => {
    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);
        })
        .catch(error => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
          console.log('sign in user info',res.user);
        })
        .catch(error => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);

        });
    }
    event.preventDefault();
  }
  const updateUserName = name => {
    var user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name
    }).then(function () {
      console.log('user name update successfully')
    }).catch(function (error) {
     console.log(error)
    });
  }
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const {displayName,email}= result.user;
            const signedInUser={name:displayName,email};
            console.log(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
          
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            console.log(errorCode,errorMessage,email);
          
        });
}
  return (
    <div className="form-validation">
      <Header></Header>
       <div className="login-form">
       <h2>Create an account</h2>
        <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
      <label htmlFor="newUser">New User Sign Up</label>
      <form onSubmit={handleSubmit}>
        {newUser && <input type="text" name="name" onBlur={handleBlur} id="" placeholder="Name" />}
        <br />
        <input type="text" onBlur={handleBlur} name="email" id="" placeholder="Your Email Address" required />
        <br />
        <input type="password" onBlur={handleBlur} name="password" id="" placeholder="Your Password" required />
        <br />
        {newUser &&<input type="password" onBlur={handleBlur} name="password" id="" placeholder="Your Confirm Password" required />}
        <br/>
        <input type="submit" value={newUser? 'Create an account':'Login'} />
        <p>Already have an account? <Link  to="/login">Login</Link> </p>
        {
        user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>
      }
        
      </form>
      <button  className="login" onClick={handleGoogleSignIn}>Google Sign In</button>
      <p style={{ color: 'red' }}>{user.error}</p>
       </div>
    </div>
  );
}

export default Login;