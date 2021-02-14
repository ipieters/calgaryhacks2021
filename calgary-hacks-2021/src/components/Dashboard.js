import React from 'react';
import NavigationBar from "./NavigationBar";
import{ useState, useEffect, Fragment } from "react";
import 'firebase/firestore';
import firebase from '../firebase';
import Container from 'react-bootstrap/Container'
import './Dashboard.css'
import CourseList from './CourseList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Dashboard() {
    const [courses, setCourses] = useState([]);
    const [incourses, setInCourses] = useState([]);

    const refc = firebase.firestore().collection("Courses");
    const refi = firebase.firestore().collection("InCourses");

    async function getCourses(){
		try {
			await refc.onSnapshot( (querySnapshot) => {
				const items = [];
				querySnapshot.forEach((doc) => {
					items.push(doc.data());
				});
			setCourses(items)
		});
		} catch (error){

		}
    }

    function getInCourses(){
        refi.onSnapshot( (querySnapshot) => {
          const items2 = [];
          querySnapshot.forEach((doc) => {
            items2.push(doc.data());
          });
          setInCourses(items2)
        });
    }

    useEffect(() => {
        getCourses();
        getInCourses();
        // eslint-disable-next-line
      }, []);

      
      function addInCourse(newInCourse){
        refi
        .doc() 
        .set(newInCourse)
        .catch((err) => {
          console.error(err);
        });
    }

	  
    return(
        <div>
            <NavigationBar />
            {/* { <button onClick={() => addInCourse({cname : "CPSC 457", User : "Julio Agostini" })}>
            </button> } */}
            <h1>Dashboard</h1>
            <Container>
				<Row>
					<Col>
						<CourseList courses={courses} incourses={incourses}/>
					</Col>
				</Row>
			</Container>
            <Container></Container>
            <Container></Container>
        </div>
    );
}


export default Dashboard;
