import { useState } from "react";
import Login from "./login";
import Signup from "./signup";

function LgScreen() {
  
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <div className="hidden lg:flex w-full rounded-2xl shadow-2xl">
          <div
            className="w-1/2 p-4 text-white italic rounded-l-2xl shadow-2xl"
            style={{ backgroundColor: "rgb(58,177,155)" }}
          >
            <iframe src="https://embed.lottiefiles.com/animation/38435" className="w-full h-full"></iframe>
          </div>

          <div className="w-1/2 p-12 shadow-2xl rounded-r-2xl">
            <div className=" flex flex-col gap-1  h-full ">
              <div className=" text-center h-1/10">
                <h1 className="" style={{ color: "rgb(58,177,155)" }}>
                  {!isLoginOpen?"Create Account":"Login"}
                </h1>
              </div>
              {!isLoginOpen?<Signup/>:<Login/>}
              <div className="flex justify-end text-blue-600"><button className="italic" onClick={()=>setIsLoginOpen(prev=>!prev)}>{isLoginOpen?"If you don't have an account click here":"If you already have an account please login"}</button></div>
            </div>
          </div>
        </div>
  )
}
function SmScreen() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const myStyle = {
    backgroundImage:
      "url('https://www.sme-news.co.uk/wp-content/uploads/2021/11/Login.jpg')",
    height: "100vh",
    // marginTop:'-50px',
    // fontSize:'50px',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="flex w-full rounded-2xl shadow-2xl lg:hidden">
          {/* <div
            className="w-full p-4 text-white italic rounded-l-2xl shadow-2xl"
            style={{ backgroundColor: "rgb(58,177,155)" }}
          >
            <iframe src="https://embed.lottiefiles.com/animation/38435" className="w-full h-full"></iframe>
          </div> */}

          <div className="w-full p-8 shadow-2xl rounded-r-2xl">
            <div className=" flex flex-col gap-1  h-full ">
              <div className=" text-center h-1/10">
                <h1 className="" style={{ color: "rgb(58,177,155)" }}>
                  {!isLoginOpen?"Create Account":"Login"}
                </h1>
              </div>
              {!isLoginOpen?<Signup/>:<Login/>}
              <div className="flex justify-end text-blue-600"><button className="italic" onClick={()=>setIsLoginOpen(prev=>!prev)}>{isLoginOpen?"If you don't have an account click here":"If you already have an account please login"}</button></div>
            </div>
          </div>
        </div>
  )
}

function Authentication_Page() {
  return (
    <>
      <div
        className="w-full flex justify-center p-10 "
        style={{ height: "100vh" }}
      >
        <LgScreen/>
        <SmScreen/>
      </div>
    </>
  );
}

export default Authentication_Page;
