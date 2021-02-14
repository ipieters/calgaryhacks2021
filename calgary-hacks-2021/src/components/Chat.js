import React from 'react';
import Nav from "./Nav";
import{ useState, useEffect, Fragment } from "react";
import 'firebase/firestore';
import firebase from '../firebase';



function Chat() {
  const[msgs, setMsgs] = useState([]);
  const ref = firebase.firestore().collection("Msgs");
  
  function getMsgs(user1, user2){
    ref.onSnapshot( (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        (user1 === doc.data().sender || user2 === doc.data().sender ) &&
        (user1 === doc.data().receiver   || user2 === doc.data().receiver  ) &&
        items.push(doc.data());
      });
      setMsgs(items)
    });
}
useEffect(() => {
  getMsgs("Julio Agostini", "Michelle");
  // eslint-disable-next-line
}, []);


  return (
    <div>
          <Nav />
          <h1>Sup</h1>
          {msgs.map((msg) => (
            <div> from = {msg.sender}
              <h2>to {msg.receiver}</h2>
              <p>{msg.txt}</p>
              </div>
          ))}
  </div>
  );
}

export default Chat;
