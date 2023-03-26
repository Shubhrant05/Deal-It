import axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PieChart from "./piechart";
import IsResolved from "./resolvedTab";

// import Sonnet from '../../components/Sonnet';
const ENDPOINT = "http://localhost:4000";

function ComplaintsCategory() {
  const [data, setData] = useState([]);
  const [plumbing, setPlumbing] = useState([]);
  const [electricity, setElectricity] = useState([]);
  const [carpenter, setCarpenter] = useState([]);
  const hall=sessionStorage.getItem("Hallname")

  const getData = () => {
    try {
      axios
        .get(`${ENDPOINT}/allcomplaints`)
        .then((res) => {
          console.log(res)
          setData(res.data);
          setPlumbing(res.data.filter((ele) => (ele.category === "Plumbing" || ele.category==="plumbing") && (ele.hallname===hall)));
          setElectricity(
            res.data.filter((ele) => (ele.category === "Electricity" || ele.category === "electricity") && (ele.hallname===hall))
          );
          setCarpenter(res.data.filter((ele) => (ele.category === "Carpenter" || ele.category === "carpenter") && (ele.hallname===hall)));
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
        className="mb-3 text-xl  md:text-2xl lg:text-3xl"
        justify
      >
        <Tab
          eventKey="plumbing"
          title="Plumbing"
          className="text-lg md:text-xl lg:text-2xl"
        >
          {plumbing.length === 0 ? (
            <div
              style={{ textAlign: "center" }}
              className="text-2xl lg:text-4xl m-3 mt-5"
            >
              No complaints regarding
              <span style={{ color: "rgb(58,177,155)" }}> plumbing</span>
            </div>
          ) : (
            <div className="lg:mt-12">
              <IsResolved data={plumbing} />
            </div>
          )}
        </Tab>
        <Tab
          eventKey="electricity"
          title="Electricity"
          className="text-lg md:text-xl lg:text-2xl"
        >
          {electricity.length === 0 ? (
            <div
              style={{ textAlign: "center" }}
              className="text-2xl lg:text-4xl m-3 mt-5"
            >
              No complaints regarding
              <span style={{ color: "rgb(58,177,155)" }}> electricity</span>
            </div>
          ) : (
            <IsResolved data={electricity} />
          )}
        </Tab>
        <Tab
          eventKey="carpenter"
          title="Carpenter"
          className="text-lg md:text-xl lg:text-2xl"
        >
          {carpenter.length === 0 ? (
            <div
              style={{ textAlign: "center" }}
              className="text-2xl lg:text-4xl m-3 mt-5"
            >
              No complaints regarding
              <span style={{ color: "rgb(58,177,155)" }}> carpenter</span>
            </div>
          ) : (
            <IsResolved data={carpenter} />
          )}
        </Tab>
      </Tabs>
      <PieChart plumbing={plumbing.length} electricity={electricity.length} carpenter={carpenter.length}/>
    </Container>
  );
}

export default ComplaintsCategory;
