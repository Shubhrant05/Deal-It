import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CiUser } from "react-icons/ci";
import { MdOutlineDriveFileRenameOutline, MdMail } from "react-icons/md";
import { RiLockPasswordLine, RiContactsBook2Line } from "react-icons/ri";
import axios from "axios"

const ENDPOINT="http://localhost:4000"

function Login() {
  const [credentials, setCredentials] = useState({
    "email": "",
    "password": "",
  });
  const [user,setUser]=useState()
  const updateCredentials = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post(`${ENDPOINT}/login`,JSON.stringify(credentials)).then((res)=>{console.log(res)
    setUser(res.data)}).catch((err)=>console.log(err))
    console.log(user)
    if(user===200){
      sessionStorage.setItem("Email",credentials.email)
    }else{
      alert("Invalid Credentials!")
    }
    // window.location.reload();
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
            type="text"
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
        className="w-full h-12  p-2 flex rounded-3xl justify-center"
        style={{ backgroundColor: "rgb(58,177,155)" }}
      >
        <button className="text-center" onClick={submitHandler}>Login</button>
      </div>
    </form>
  );
}

export default Login;
