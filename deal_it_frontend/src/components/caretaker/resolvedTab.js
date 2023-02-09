import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Complaints from "./complaints";
import Pagination from "../pagination";

function IsResolved({ ...props }) {
  
  const resolved = props.data.filter((ele) => ele.isresolved);
  
  const notresolved = props.data.filter((ele) => !ele.isresolved);


  return (
    <Tabs
      defaultActiveKey="notResolved"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="resolved" title="Resolved">
        <Complaints data={resolved} />
        <Pagination complaints={resolved}/>
        
      </Tab>
      <Tab eventKey="notResolved" title="Not Resolved">
        <Complaints data={notresolved} />
        <Pagination complaints={notresolved}/>
      </Tab>
    </Tabs>
  );
}

export default IsResolved;
