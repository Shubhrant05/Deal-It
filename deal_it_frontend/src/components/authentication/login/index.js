import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const ENDPOINT = "http://localhost:4000";

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    topping:""
  });
  // const [user, setUser] = useState();
  const [user, setUser] = useState()
  const updateCredentials = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // if (credentials.topping==="student"){

      // }
      let res = await axios.post(`${ENDPOINT}/${credentials.topping==="student"?"login":"caretaker"}`, JSON.stringify(credentials))
        setUser(res.data)
      console.log(res)
      setUser((data) => {
        if (data.status === '200') {
          sessionStorage.setItem("Email", credentials.email)
          sessionStorage.setItem("Name",data.name)
          sessionStorage.setItem("Person",credentials.topping )
          // {credentials.topping==="caretaker"?sessionStorage.setItem("Hallname",data.hallname):null}
          if(credentials.topping==="caretaker"){
            sessionStorage.setItem("Hallname",data.hallname)
          }
          toast.success("Login Successfull",{
            hideProgressBar:true
          })
          
          
          setTimeout(()=>{
            if(credentials.topping==="student"){
              navigate("/dashboard")
            }
            else{
              navigate("/caretaker")
            }
          },1000)
        } else if(data.status==='401') {
          toast.error("Invalid Credentials!",{
            hideProgressBar:true
          })
          
        }
        return data
      })
    } catch (err) {
      console.log(err)
    }


  };
  return (
    <form className=" h-5/6 flex flex-col gap-3 p-10">
      <div
        className="w-full h-12  p-2 flex rounded-3xl"
        style={{ backgroundColor: "rgb(244,248,247)" }}
      >
        <div className=" w-1/6 p-2">
          <MdMail className="h-full w-full" />
        </div>
        <div className="w-4/5 ">
          <input
            type="email"
            name="email"
            placeholder="Enter EmailID"
            className="w-full h-full text-lg italic"
            style={{ background: "none" }}
            onChange={updateCredentials}
          />
        </div>
      </div>
      <div
        className="w-full h-12  p-2 flex rounded-3xl"
        style={{ backgroundColor: "rgb(244,248,247)" }}
      >
        <div className=" w-1/6 p-2">
          <RiLockPasswordLine className="h-full w-full" />
        </div>
        <div className="w-4/5 ">
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="w-full h-full text-lg italic"
            style={{ background: "none" }}
            onChange={updateCredentials}
          />
        </div>
      </div>
      <div
        className="w-full h-12  p-2 flex rounded-3xl "
        style={{ backgroundColor: "rgb(244,248,247)" }}
      >
        {/* <p>Are you a student or caretaker?</p> */}
        <div className=" w-1/2 container">
          <input
            type="radio"
            name="topping"
            value="student"
            id="regular1"
            onChange={updateCredentials}
          />
          <label htmlFor="regular" className="ml-3">Student</label>
        </div>
        <div className="w-1/2 container">
        <input
            type="radio"
            name="topping"
            value="caretaker"
            id="regular2"
            onChange={updateCredentials}
          />
          <label htmlFor="regular" className="ml-3">Caretaker</label>
        </div>
      </div>

      <div
        className="w-full h-12  p-2 flex rounded-3xl justify-center"
        style={{ backgroundColor: "rgb(58,177,155)" }}
        
      >
        <button className="text-center" onClick={submitHandler} style={{width:"inherit"}}>
          Login
        </button>
      </div>
      {/* <Toaster position="top-center" /> */}
      <ToastContainer position="top-center" autoClose={500} theme="dark"/>
    </form>
  );
}

export default Login;
