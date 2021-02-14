import React from 'react';

import "./Profile.css";
import NavigationBar from "./NavigationBar";
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

  function addInterest(newInterest){
    ref2
    .doc() 
    .set(newInterest)
    .catch((err) => {
      console.error(err);
    });
}
function addFriend(newFriend){
  ref3
  .doc() 
  .set(newFriend)
  .catch((err) => {
    console.error(err);
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
        <NavigationBar />
        <main className="main-container">
      <section className="glass">
        <div className="dashboard">
          <div className="user">
            <h1 id="profile-header">Yoshi's Profile</h1>
            <img src="https://mariopartylegacy.com/wp-content/uploads/2011/08/yoshiprofile.png" height="35%" weight="50%" alt="" />
            <h3>Yoshi the Dinosaur</h3>
            <p>The greatest jumper</p>
            <h2>Yoshi's Bio</h2>
            <div></div>
            <h4>3rd Year</h4>
            <h4>Courses: DINO 413, THROW 203</h4>
            <h4>Interests: I like to play with my bro Mario and eat my enemies!</h4>
          </div>
        </div>
        <div className="friends-list">
          <div className="status">
            <h1>My Friends</h1>
            <input type="text" />
          </div>
          <div className="cards">
            <div className="card">
            <img src="https://mariopartylegacy.com/wp-content/uploads/2011/08/luigiprofile.png" height="40%" width="50%" alt="" />
              <div className="card-info">
                <h2>Luigi</h2>
                <p>Classes in-common: Baseball 201, BBall 431</p>
                <p>Interests in-common: Getting gold stars</p>
              </div>
            </div>
            <div className="card">
            <img src="https://mariopartylegacy.com/wp-content/uploads/2011/08/birdoprofile.png" height="40%" width="50%" alt="" />
              <div className="card-info">
              <h2>Birdo</h2>
                <p>Classes in-common: Baseball 201, DINO 345</p>
                <p>Interests in-common: Finding eggs</p>
              </div>
            </div>
            <div className="card">
            <img src="https://mariopartylegacy.com/wp-content/uploads/2018/07/bowserprofile.png" height="40%" width="60%" alt="" />
              <div className="card-info">
                <h2>Bowser</h2>
                <p>Classes in-common: FLY 200</p>
                <p>Interests in-common: Playing jokes on people</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

        {/*<NavigationBar />
        <h1>Profile Page</h1>
        {/* { <button onClick={() => addInterest({interest : "biking", name : "Julio Agostini" })}>
          </button> } */}
        {/* { <button onClick={() => addFriend({name1 : "Julio Agostini", name2 : "Michelle" })}>
          </button> } */}
       {/* {user.map((user) => (
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
          ))}*/}

    </div>
  );
}

export default Profile;
