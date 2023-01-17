import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    const [credentials,setCredentials]=useState({
        "email":"",
        "password":""
    })

    const updateCredentials=(e)=>{
        setCredentials({
            ...credentials,
            [e.target.name]:e.target.value
        })
    }
    const submitHandler=async(e)=>{
        e.preventDefault();
        console.log(credentials);
        setCredentials({
            "email":"",
        "password":""
        })
        // window.location.reload();
    }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" onChange={updateCredentials}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" onChange={updateCredentials}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitHandler}>
        Login
      </Button>
    </Form>
  );
}

export default Login;