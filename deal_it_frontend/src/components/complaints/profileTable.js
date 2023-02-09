import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ENDPOINT = "http://localhost:4000";

function ProfileTable({ ...props }) {
  // const email=sessionStorage.getItem("Email");
  // const rollno=email.slice(0,email.indexOf('@'));
  const person = sessionStorage.getItem("Person");
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({
    name: props.data.name,
    email: props.data.email,
    mobileno: props.data.mobileno,
  });
  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const editProfile = (e) => {
    e.preventDefault();
    setEdit((prev) => !prev);
  };
  const applyChanges = async (e) => {
    e.preventDefault();
    setEdit((prev) => !prev);
    // console.log(data)
    try {
      axios.put(`${ENDPOINT}/updateProfile`,JSON.stringify(data)).then((res)=>console.log(res)).catch((err)=>console.log(err))
      
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(data.name)
  return (
    <Form>
      {person === "student" ? (
        <Form.Group className="mb-3" controlId="formBasicRollno">
          <Form.Label>Roll Number</Form.Label>
          <Form.Control type="text" value={props.data.rollno} disabled />
        </Form.Group>
      ) : (
        <Form.Group className="mb-3" controlId="formBasicHallName">
          <Form.Label>Hallname</Form.Label>
          <Form.Control
            type="text"
            placeholder={props.data.hallname}
            disabled
          />
        </Form.Group>
      )}
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder={props.data.name}
          disabled={edit ? false : true}
          onChange={updateData}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder={props.data.email} disabled />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMobileno">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          name="mobileno"
          type="text"
          placeholder={props.data.mobileno}
          disabled={edit ? false : true}
          onChange={updateData}
        />
      </Form.Group>
      {!edit ? (
        <Button variant="primary" onClick={editProfile}>
          Edit Profile
        </Button>
      ) : (
        <Button variant="primary" type="submit" onClick={applyChanges}>
          Save Changes
        </Button>
      )}
    </Form>
  );
}

export default ProfileTable;
