import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi'
import Pagination from "../pagination";
import axios from "axios"
const ENDPOINT = "http://localhost:4000";
function CustomToggle({ children, eventKey }) {

    // const [toggle , setToggle] = useState(false)
    const decoratedOnClick = useAccordionButton(eventKey, () => {
      console.log('totally custom!')
      }
  );
  

  
    return (
      <button
        type="button"
        style={{ fontSize: "1.5rem" }}
        onClick={
          decoratedOnClick
  }
      >
        {children}
      </button>
    );
  }
  

function Complaints({ ...props }) {

  const onClickHandler = (hash) => {
    const body = {
       hashKey : hash
    }
    console.log(hash, "hash")
    const url = "http://localhost:4000/updateresolvestatus"
    console.log(url,"url")
    axios.post(url, body)
      .then(() => { console.log("Complaint resolved") })
      .catch((err) => {console.log(err)})
  }
  const complaints = props.data;
//   console.log(data);
  return (
    <>
      <section className="flex flex-col gap-3 mt-5 mb-10">
        {complaints.map((ele) => {
          const mailSub = ele.subject
          const mailBody = "Dear student your complaint stating "+ele.description+" raised on "+ ele.date +" for room no."+ele.roomno+ " has been resolved. For any further issue please contact your caretaker"
          return (
            <Accordion defaultActiveKey="0" className="w-full">
              <Card
                className=" accordion-class m-2 drop-shadow-xl p-4 bg-slate-200 mx-auto"
                style={{ width: "95%" }}
              >
                <div className=" flex justify-between font-semibold font-serif text-lg">
                  <div>
                    {ele.subject}
                    <div className="text-xs font-mono">
                      Posted on : {ele.date}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    {/* <Button className={props.status ? 'btn btn-success' : 'btn btn-danger'}> Not Resolved </Button> */}
                    {!ele.isresolved && (
                      <Button className=" ml-4 mr-4 btn btn-warning" onClick={() => { onClickHandler(ele.hash) }}>
                        {" "}
                        <a className = "mail" href={`mailto:${ele.raisedby.email},${ele.raisedby.email}?subject=${mailSub}&body=${mailBody}`}>Resolve
                        </a>
                        {" "}
                      </Button>
                    )}

                    <CustomToggle eventKey="0">
                      {" "}
                      <FiArrowDownCircle />{" "}
                    </CustomToggle>
                  </div>
                </div>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <b>Complaint : </b> {ele.description}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          );
        })}
        {/* <Pagination complaints={complaints}/> */}
      </section>
    </>
  );
}

export default Complaints;
