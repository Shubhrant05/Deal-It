import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi'

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
  const data = props.data;
//   console.log(data);
  return (
    <>
      <section className="flex flex-col gap-3">
        {data.map((ele) => {
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
                      <Button className=" ml-4 mr-4 btn btn-warning">
                        {" "}
                        Resolve{" "}
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
      </section>
    </>
  );
}

export default Complaints;
