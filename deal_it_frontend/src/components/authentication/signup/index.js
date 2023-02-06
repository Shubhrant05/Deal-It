import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {CiUser} from "react-icons/ci"
import {MdOutlineDriveFileRenameOutline,MdMail} from "react-icons/md"
import {RiLockPasswordLine,RiContactsBook2Line} from "react-icons/ri"

import axios from "axios"
import { useNavigate } from "react-router-dom";

const ENDPOINT="http://localhost:4000"

function Signup() {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    "rollno": "",
    "name":"",
    "email": "",
    "password": "",
    "confirmPass": "",
    "mobileno":""
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
    await axios.post(`${ENDPOINT}/signup`, JSON.stringify(userData)).then((res) => {
      console.log(res)
      navigate("/login")
    }).catch((err) => console.log(err))
    // window.location.reload();
  };
  return (
    <form className=" h-5/6 flex flex-col gap-3 p-10">
                <div className="w-full h-12  p-2 flex rounded-3xl" style={{backgroundColor:"rgb(244,248,247)"}}>
                  <div className=" w-1/6 p-2">
                    <CiUser className="h-full w-full" />
                  </div>
                  <div className="w-4/5 ">
                    <input type="text" name="rollno"  placeholder="Enter roll number" className="w-full h-full text-lg italic text-black" style={{background:"none"}}  onChange={updateData} />
                  </div>
                </div>
                <div className="w-full h-12  p-2 flex rounded-3xl" style={{backgroundColor:"rgb(244,248,247)"}}>
                  <div className=" w-1/6 p-2 ">
                    <MdOutlineDriveFileRenameOutline className="h-full w-full" />
                  </div>
                  <div className="w-4/5 ">
                    <input type="text" name="name" placeholder="Enter fullname" className="w-full h-full text-lg italic" style={{background:"none"}}  onChange={updateData} />
                  </div>
                </div>
                <div className="w-full h-12  p-2 flex rounded-3xl" style={{backgroundColor:"rgb(244,248,247)"}}>
                <div className=" w-1/6 p-2">
                    <MdMail className="h-full w-full" />
                  </div>
                  <div className="w-4/5 ">
                    <input type="email" name="email" placeholder="Enter EmailID" className="w-full h-full text-lg italic" style={{background:"none"}}  onChange={updateData} />
                  </div>
                </div>
                <div className="w-full h-12  p-2 flex rounded-3xl" style={{backgroundColor:"rgb(244,248,247)"}}>
                  <div className=" w-1/6 p-2">
                    <RiLockPasswordLine className="h-full w-full" />
                  </div>
                  <div className="w-4/5 ">
                    <input type="password" name="password" placeholder="Create password" className="w-full h-full text-lg italic" style={{background:"none"}} onChange={updateData}/>
                  </div>
                </div>
                <div className="w-full h-12  p-2 flex rounded-3xl" style={{backgroundColor:"rgb(244,248,247)"}}>
                  <div className=" w-1/6 p-2">
                    <RiLockPasswordLine className="h-full w-full" />
                  </div>
                  <div className="w-4/5 ">
                    <input type="password" name="confirmPass" placeholder="Confirm password" className="w-full h-full text-lg italic" style={{background:"none"}}   onChange={updateData}/>
                  </div>
                </div>
                <div className="w-full h-12  p-2 flex rounded-3xl" style={{backgroundColor:"rgb(244,248,247)"}}>
                  <div className=" w-1/6 p-2">
                    <RiContactsBook2Line className="h-full w-full" />
                  </div>
                  <div className="w-4/5 ">
                    <input type="text" name="mobileno" placeholder="Enter Contact Number" className="w-full h-full text-lg italic" style={{background:"none"}} onChange={updateData}/>
                  </div>
                </div>
                <div className="w-full h-12  p-2 flex rounded-3xl justify-center" style={{backgroundColor:"rgb(58,177,155)"}}>
                  <button className="text-center" onClick={submitHandler}>SignUp</button>
                </div>
                
                
              </form>
  );
}

export default Signup;
