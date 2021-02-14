import React from 'react';
import NavigationBar from "./NavigationBar";
import{ useState, useEffect, Fragment } from "react";
import 'firebase/firestore';
import firebase from '../firebase';
import ChatFeed from './chat/ChatFeed';
import { ChatEngine } from 'react-chat-engine';


function Chat() {
  const[msgs, setMsgs] = useState([]);
  const ref = firebase.firestore().collection("Msgs");
  
  function getMsgs(user1){
    ref
    .orderBy('order')
    .onSnapshot( (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        (user1 === doc.data().sender || user1 === doc.data().receiver) &&
        items.push(doc.data());
      });
      setMsgs(items)
    });
}
useEffect(() => {
  getMsgs("Julio Agostini");
  // eslint-disable-next-line
}, []);

  function addMsg(newMsg){
    ref
    .doc() 
    .set(newMsg)
    .catch((err) => {
      console.error(err);
    });
}


  return (
    <div>
          <NavigationBar />
          <ChatEngine 
            height="100vh"
            projectID="8a6bc180-2673-4faa-973f-45705f51efb4"
            userName="Julio"
            userSecret="123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
  </div>
  );
}

export default Chat;


         {/* <h1>Chat</h1>
          <h1>Sup</h1>
          {/* <button onClick={() => addMsg({order : 2, receiver : "Michelle", sender: "Julio Agostini", txt :"Good job" })}>
          </button>}
          {msgs.map((msg) => (
            <div> from = {msg.sender}
              <h2>to {msg.receiver}</h2>
              <p>{msg.txt}</p>
              </div>
          ))}*/}