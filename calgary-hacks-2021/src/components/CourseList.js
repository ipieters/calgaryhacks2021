import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';

const CourseList = (props) => {

      return (
          <div>
            <Row>
            <ListGroup as="ul" style={{minWidth: "250px"}}>
                <ListGroup.Item as="li" active>Your Courses</ListGroup.Item> 
                {
                    props.courses.map((course)=> (
                        <ListGroup.Item as="li">{course.name} - {course.desc}</ListGroup.Item>   
                    ))} 
                   
			    </ListGroup>
            </Row>
            <Row style={{paddingTop: "20px" }}>
            <ListGroup as="ul" style={{minWidth: "250px"}}>
                <ListGroup.Item as="li" active>People in your Courses</ListGroup.Item> 
               {props.incourses.map((incourse)=> (
                        
                            <ListGroup.Item as="li" >{incourse.user} - {incourse.cname}</ListGroup.Item>
                        ))}
           		</ListGroup>
            </Row> 
          </div>

         
      )
}

export default CourseList;