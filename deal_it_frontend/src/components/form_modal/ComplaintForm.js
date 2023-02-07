import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Dropdown,FloatingLabel} from "react-bootstrap"

import axios from "axios";

const ENDPOINT = "http://localhost:4000";

function ComplaintForm(props) {
  const [userData, setUserData] = useState({
    subject:"Complaint",
    hallname: "",
    category:"",
    roomno: "",
    raisedby:{
      email:sessionStorage.getItem("Email")
    },
    description: "",
    date:new Date().toLocaleDateString("en-US")
  });
  const updateData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(userData);
    await axios
      .post(`${ENDPOINT}/newcomplaint`, JSON.stringify(userData))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    // window.location.reload();
  };
  return (
    
    <form onSubmit={submitHandler}> 
      <Form.Select aria-label="Default select example" name="hallname" onChange={updateData}>
      <option>Select Hostel Name</option>
      <option value="aryabhatta">Aryabhatta Hostel</option>
      <option value="vashishta">Vashishta Hostel</option>
      <option value="vivekananda">Vivekananda Hostel</option>
      <option value="saraswati">Saraswati Hostel</option>
    </Form.Select>
      <Form.Select aria-label="Default select example" name="category" onChange={updateData} className="mb-3 mt-3">
      <option>Select Complaint Category</option>
      <option value="plumbing">Plumbing</option>
      <option value="electricity">Electricity</option>
      <option value="carpenter">Carpenter</option>
      {/* <option value="saraswati">Saraswati Hostel</option> */}
    </Form.Select>
    <FloatingLabel
        controlId="floatingInput"
        label="Room Number"
        className="mb-3 mt-3"
      >
        <Form.Control type="text" placeholder="Enter Room Number" name="roomno" onChange={updateData}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Complaint">
        <Form.Control
          as="textarea"
          name="description"
          placeholder="Enter your complaint here..."
          style={{ height: '100px' }}
          onChange={updateData}
        />
      </FloatingLabel>
      <Button variant="primary" type="submit" className="mt-5" onClick={props.hide}>
        Submit Complaint
      </Button>
    </form>
  );
}

export default ComplaintForm;
