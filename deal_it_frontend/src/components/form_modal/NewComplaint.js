import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {MyVerticallyCenteredModal} from './FormModal'



const NewComplaint = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}
        style={{
          marginRight: "1rem",
          background: "rgb(58,177,155)",
          fontWeight: 600
        }}
        >
    + New Complain
    </Button>

  <MyVerticallyCenteredModal
    show={modalShow}
    onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default NewComplaint