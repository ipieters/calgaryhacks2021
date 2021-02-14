import React from 'react';
import Nav from "./Nav";
import "./Profile.css";

function Profile() {
  return(
    <div>
        <Nav />
        <main>
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
    </div>
  );
}

export default Profile;
