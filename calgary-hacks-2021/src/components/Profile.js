import React from 'react';
import Nav from "./Nav";
import{ useState, useEffect, Fragment } from "react";
import 'firebase/firestore';
import firebase from '../firebase';

function Profile() {
  const[user, setUser] = useState([]);
  const[interests, setInterests] = useState([]);
  const[friends, setFriends] = useState([]);
  const ref = firebase.firestore().collection("Users");
  const ref2 = firebase.firestore().collection("Interest");
  const ref3 = firebase.firestore().collection("Friends");

  
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

  //make sure you then set the correct friend
  function getFriends(name){
    ref3.onSnapshot( (querySnapshot) => {
      const items3 = [];
      querySnapshot.forEach((doc) => {
        (name === doc.data().name1 || name === doc.data().name2) && items3.push(doc.data());
      });
      setFriends(items3)
    });
  }

  

useEffect(() => {
  getUser("Julio Agostini");
  getInterests("Julio Agostini");
  getFriends("Julio Agostini");

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
            {friends.map((friend) => (
            <div> 
              <p>{friend.name2}</p>
            </div>
          ))}
    </div>
  );
}

export default Profile;
