import Table from 'react-bootstrap/Table';

function ProfileTable() {
    const email=sessionStorage.getItem("Email");
    const rollno=email.slice(0,email.indexOf('@'));

  return (
    <Table borderless hover variant='dark'>
      
      <tbody>
        <tr>
          <td>Name</td>
          <td>{sessionStorage.getItem("Name")}</td>
        </tr>
        <tr>
          <td>Roll Number</td>
          <td>{rollno}</td>
        </tr>
        <tr>
          <td >Email</td>
          <td>{email}</td>
          
        </tr>
      </tbody>
    </Table>
  );
}

export default ProfileTable;