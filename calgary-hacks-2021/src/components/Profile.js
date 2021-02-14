import React from 'react';
import Nav from "./Nav";
import{ useState, useEffect, Fragment } from "react";
import 'firebase/firestore';
import firebase from '../firebase';

function Profile() {
  const[user, setUser] = useState([]);
  const ref = firebase.firestore().collection("Users");
  
  function getUser(name){
    ref.onSnapshot( (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        name === doc.data().name && items.push(doc.data());
      });
      setUser(items)
    });
}
useEffect(() => {
  getUser("Julio Agostini");
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
    </div>
  );
}

export default Profile;
