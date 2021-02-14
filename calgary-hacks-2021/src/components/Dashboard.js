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
            <div className="main">
            {/* { <button onClick={() => addInCourse({cname : "CPSC 457", User : "Julio Agostini" })}>
            </button> } */}
            <h1>Dashboard</h1>
            <Container class="main-container">
				<Row>
					<Col>
            <div className="classes-left-container">
            <ListGroup as="ul">
							<ListGroup.Item as="li" active>
								Classes
							</ListGroup.Item>
							<ListGroup.Item as="li">CPSC 433</ListGroup.Item>
							<ListGroup.Item as="li" disabled>CPSC 413</ListGroup.Item>
							<ListGroup.Item as="li">DINO 345</ListGroup.Item>
						</ListGroup>
            </div>
						
					</Col>
					<Col>
          <section className="middle-section">
          <div className="class-middle-container">
              <div className="course-text-middle">
              <h2 id="course-name">Course Name</h2>
             <h3 id="course-code-info">CPSC 413 - Design of Noodles</h3>
             <p>In this class, we learn how to make delicious pasta!</p>
              </div>
             
             <div className="container-people"></div>
             <div className="class-people">
                <h3 className="text-classes">People in Group</h3>
                <p>
                  Igor <br></br>
                  Michelle <br></br>
                  Julio <br></br>
                  Isa <br></br>
                </p>
              </div>
             <div className="interest-people">
             <h3 className="text-classes">Group Interests</h3>
             <p>
               Hiking <br></br>
               Basketball <br></br>
               Gaming <br></br>
               Travelling <br></br>
             </p>
             <div>
             </div>
             </div>
            </div> 
          </section>
         

					</Col>
					<Col>
            <div className="friends-right-container">
            <ListGroup as="ul">
							<ListGroup.Item as="li" active>
								List of Friends
							</ListGroup.Item>
							<ListGroup.Item as="li">Luigi</ListGroup.Item>
							<ListGroup.Item as="li">
								Birdo
							</ListGroup.Item>
							<ListGroup.Item as="li">Bowser</ListGroup.Item>
						</ListGroup>
            </div>
						

					</Col>
				</Row>
			</Container>
         {/*   <Container></Container>
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
            */}
            </div>

        </div>
        
    );
}


export default Dashboard;