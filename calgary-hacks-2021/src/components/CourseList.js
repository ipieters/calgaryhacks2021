import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';

const CourseList = (props) => {

      return (
          <div>
            <Row>
            <ListGroup as="ul" style={{minWidth: "250px"}}>
                <ListGroup.Item as="li" active>{props.title}</ListGroup.Item> 
                {
                    props.courses.map((course)=> (
                        <ListGroup.Item as="li">{course.name || course.user} - {course.desc || course.cname}</ListGroup.Item>   
                    ))} 
                   
			    </ListGroup>
            </Row>
          </div>

         
      )
}

export default CourseList;