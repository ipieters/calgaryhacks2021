import 'firebase/firestore';
import firebase from './firebase';
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect, Fragment } from "react";


function GetFirebase(){
    const[users, setUsers] = useState([])
    const[msgs, setMsgs] = useState([])
    const[friends, setFriends] = useState([])
    const[courses, setCourses] = useState([])
    const[interests, setInterests] = useState([])
    const[inCourse, setIncourse] = useState([])

    const userRef = firebase.firestore().collection("Users");

    function getUsers(){
        userRef.get().then((item) => {
            const items = items.docs.map((doc) => doc.data());
            setUsers(items)
        });
    }
    useEffect(() => {
        getUsers();
        // eslint-disable-next-line
      }, []);
}



/*

function getMsgs(user1, user2){
    const ref = firebase.firestore().collection("Msgs");
    var items = []
    ref.onSnapshot( (querySnapshot ) => {
        querySnapshot.forEach((doc) => {
            user1 === doc.data().sender ||  user1 === doc.data.receiver &&
            (user2 === doc.data.sender || user2 === doc.data.receiver && items.push(doc.data)) 
            });
    });
    return items
}

function getFriends(user){
    const ref = firebase.firestore().collection("Friends");
    var items = []
    ref.onSnapshot( (querySnapshot) => { 
        (querySnapshot.forEach((doc) => {
        user === doc.data.name1 ||  user === doc.data.receiver && items.push(doc.data)
        }));
    });
    return items
}

function getInCoursesPerson(user){
    const ref = firebase.firestore().collection("InCourses");
    var items = []
    ref.onSnapshot( (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            user === doc.data.user && items.push(doc.data);
        });
    })
    return items
}

function getInCoursesCourse(course){
    const ref = firebase.firestore().collection("InCourses");
    var items = []
    ref.onSnapshot( (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            course === doc.data.cname && items.push(doc.data);
        });
    })
    return items
}

function getInterests(user){
    const ref = firebase.firestore().collection("Interest");
    var items = []
    ref.onSnapshot( (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            user === doc.data.name && items.push(doc.data);
        });
    })
    return items
}

function getCourses(){
    const ref = firebase.firestore().collection("Courses");
    var items = []
    ref.onSnapshot( (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
    })
    return items
}
*/
export default GetFirebase

