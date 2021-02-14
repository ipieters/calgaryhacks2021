import React from 'react';
import NavigationBar from "./NavigationBar";
import{ useState, useEffect, Fragment } from "react";
import 'firebase/firestore';
import firebase from '../firebase';
import Container from 'react-bootstrap/Container'
import './Dashboard.css'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Dashboard() {
    const [courses, setCourses] = useState([]);
    const [incourse, setInCourses] = useState([]);

    const refc = firebase.firestore().collection("Courses");
    const refi = firebase.firestore().collection("InCourses");

    function getCourses(){
        refc.onSnapshot( (querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push(doc.data());
          });
          setCourses(items)
        });
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
						<ListGroup as="ul">
							<ListGroup.Item as="li" active>
								Cras justo odio
							</ListGroup.Item>
							<ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
							<ListGroup.Item as="li" disabled>
								Morbi leo risus
							</ListGroup.Item>
							<ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col>
						<ListGroup as="ul">
							<ListGroup.Item as="li" active>
								Cras justo odio
							</ListGroup.Item>
							<ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
							<ListGroup.Item as="li" disabled>
								Morbi leo risus
							</ListGroup.Item>
							<ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col>
						<ListGroup as="ul">
							<ListGroup.Item as="li" active>
								Cras justo odio
							</ListGroup.Item>
							<ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
							<ListGroup.Item as="li" disabled>
								Morbi leo risus
							</ListGroup.Item>
							<ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
						</ListGroup>
					</Col>
				</Row>
			</Container>
            <Container></Container>
            <Container></Container>
            {courses.map((course) => (
            <div> <h2>Name {course.name} </h2>
            <h3>Description: {course.desc}</h3>
            <p></p>
            </div>
          ))}
            {incourse.map((inc) => (
            <div>
            <h2>{inc.user} is in {inc.cname}</h2>
            <p></p>
            </div>
          ))}
          
        </div>
    );
}


export default Dashboard;
