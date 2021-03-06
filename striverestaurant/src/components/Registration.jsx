import { Form, Button } from "react-bootstrap";


const Registration = () => {
  return (
    <>
      <div className="myForm">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
    
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label> Surname</Form.Label>
              <Form.Control type="text" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password </Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password Confirm</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
           
            
            <Button variant="primary" type="submit" disabled>
              Submit
            </Button>
          </Form>
      </div>
    </>
  );
};

export default Registration;
