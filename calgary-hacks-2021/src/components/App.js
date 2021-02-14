import Signup from "./Signup"
import firebase from '../firebase';
import React, { useState, useEffect } from 'react';
import 'firebase/firestore';

function App() {
  const [users, setUsers] = useState([])
  const [msgs, setMsgs] = useState([])

  const ref = firebase.firestore().collection("Users");
  const refMsgs = firebase.firestore().collection("Msgs");
  function getUsers() {
    ref.onSnapshot( (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setUsers(items)
      console.log(setUsers)
    })
  }
  function getMsgs() {
    refMsgs.onSnapshot( (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setMsgs(items)
      // querySnapshot.forEach((doc) => {
      //   user1.name === doc.sender ||  user1.name === doc.receiver &&
      //     (user2.name === doc.sender || user2.name === doc.receiver && items.push(doc.data)) 
      // });
    })
  }

  useEffect(() => {
    getMsgs();
    getUsers(); 

  }, []);
  return  <div>
            <Signup />
            <h1>Users</h1>
            {msgs.map((msg) => (
          <div> key =  {msg.txt}
            <h2>{msg.sender}</h2>
            <p>{msg.receiver}</p>
          </div>
      ))}
        </div>
        
}

export default App;
