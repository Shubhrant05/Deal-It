import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProfileTable from './profileTable';

function ProfileModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          User Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ProfileTable data={props.data}/>
      </Modal.Body>
    </Modal>
  );
}
export default ProfileModal;