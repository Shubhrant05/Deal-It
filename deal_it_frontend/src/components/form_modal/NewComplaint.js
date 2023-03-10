import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {MyVerticallyCenteredModal} from './FormModal'



const NewComplaint = (props) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      {props.show?<Button id='new-complaint' onClick={() => setModalShow(true)}
        style={{
          
        }}
        >
    + New Complain
    </Button>:<></>}

  <MyVerticallyCenteredModal
    show={modalShow}
    onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default NewComplaint