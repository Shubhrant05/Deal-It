import axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import IsResolved from "./resolvedTab";

// import Sonnet from '../../components/Sonnet';
const ENDPOINT = "http://localhost:4000";

function ComplaintsCategory() {
  const [data, setData] = useState([]);
  const [plumbing, setPlumbing] = useState([]);
  const [electricity,setElectricity]=useState([]);
  const [carpenter,setCarpenter]=useState([])

  const getData = () => {
    try {
      axios
        .get(`${ENDPOINT}/allcomplaints`)
        .then((res) => {setData(res.data);
        setPlumbing(res.data.filter((ele)=>ele.category==="Plumbing"));
        setElectricity(res.data.filter((ele)=>ele.category==="Electricity"));
        setCarpenter(res.data.filter((ele)=>ele.category==="Carpenter"));
    })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container className="mt-5">
      <Tabs
        defaultActiveKey="plumbing"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="plumbing" title="Plumbing">
        {plumbing.length===0?
          <div style={{textAlign:"center"}} className='text-2xl lg:text-4xl m-3 mt-5'>No complaints regarding<span style={{color:"rgb(58,177,155)"}}> plumbing</span></div>:
          <IsResolved data={plumbing}/>}
        </Tab>
        <Tab eventKey="electricity" title="Electricity">
          {electricity.length===0?
          <div style={{textAlign:"center"}} className='text-2xl lg:text-4xl m-3 mt-5'>No complaints regarding<span style={{color:"rgb(58,177,155)"}}> electricity</span></div>:
          <IsResolved data={electricity}/>}
        </Tab>
        <Tab eventKey="carpenter" title="Carpenter">
        {carpenter.length===0?
          <div style={{textAlign:"center"}} className='text-2xl lg:text-4xl m-3 mt-5'>No complaints regarding<span style={{color:"rgb(58,177,155)"}}> carpenter</span></div>:
          <IsResolved data={carpenter}/>}
        </Tab>
        
      </Tabs>
    </Container>
  );
}

export default ComplaintsCategory;
