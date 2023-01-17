import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"

function Signup() {
    const [showPassword,setShowPassword]=useState(false)
    const [showConfirmPassword,setShowConfirmPassword]=useState(false)
  const [userData, setUserData] = useState({
    "rollNumber": "",
    "email": "",
    "password": "",
  });
  const updateData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(userData);
    // window.location.reload();
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicRollNo">
        <Form.Label>Roll Number</Form.Label>
        <div className="flex gap-2 border-2 border-gray-200 rounded-md p-2">

        <Form.Control
          name="rollNumber"
          type="text"
          placeholder="Roll No"
          onChange={updateData}
        />
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <div className="flex gap-2 border-2 border-gray-200 rounded-md p-2">
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          onChange={updateData}
        />
        </div>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Create Password</Form.Label>
        <div className="flex gap-2 border-2 border-gray-200 rounded-md p-2">
        <Form.Control
          name="newpassword"
          type={showPassword?"text":"password"}
          placeholder="Create Password"
          onChange={updateData}
        />
        <i onClick={()=>setShowPassword(prev=>!prev)}>{showPassword?<AiOutlineEye className="h-12" />:<AiOutlineEyeInvisible className="h-12"/>}</i>
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <div className="flex gap-2 border-2 border-gray-200 rounded-md p-2">
        <Form.Control
          name="confirmpassword"
          type={showConfirmPassword?"text":"password"}
          placeholder="Confirm Password"
          onChange={updateData}
        />
        <i onClick={()=>setShowConfirmPassword(prev=>!prev)}>{showConfirmPassword?<AiOutlineEye className="h-12" />:<AiOutlineEyeInvisible className="h-12"/>}</i>
        </div>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitHandler}>
        Signup
      </Button>
    </Form>
  );
}

export default Signup;
