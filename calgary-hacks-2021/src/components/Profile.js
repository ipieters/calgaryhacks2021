import React from 'react';
import Nav from "./Nav";
import{ useState, useEffect, Fragment } from "react";
import 'firebase/firestore';
import firebase from '../firebase';

function Profile() {
  const[user, setUser] = useState([]);
  const[interests, setInterests] = useState([]);
  const ref = firebase.firestore().collection("Users");
  const ref2 = firebase.firestore().collection("Interest");
  
  function getUser(name){
    ref.onSnapshot( (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        name === doc.data().name && items.push(doc.data());
      });
      setUser(items)
    });
}

  function getInterests(name){
    ref2.onSnapshot( (querySnapshot) => {
      const items1 = [];
      querySnapshot.forEach((doc) => {
        name === doc.data().name && items1.push(doc.data());
      });
      setInterests(items1)
    });
  }

useEffect(() => {
  getUser("Julio Agostini");
  getInterests("Julio Agostini");

  // eslint-disable-next-line
}, []);

  return(
    <div>
        <Nav />
        <h1>Profile Page</h1>
        {user.map((user) => (
            <div> from = {user.name}
              <h2>to {user.bio}</h2>
              <p>{user.email}</p>
              </div>
          ))}
          {interests.map((interest1) => (
            <div> 
              <p>{interest1.interest}</p>
            </div>
          ))}
    </div>
  );
}

export default Profile;
