import { useState } from 'react';
import {Table, TableCell, TableRow, TableHead, TableBody, styled} from '@mui/material';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import { getUsers,deleteUser } from '../service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
`

const THead = styled(TableRow)`
    background-color: #000000;
    & th  {
      color: white;
    }

`

function AllUsers() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    getAllUsers();
  },[])

  const getAllUsers = async () =>{
    const response = await getUsers();
    setUsers(response);
    // console.log(response);
  }

  const deleteHandler = async (id) =>{ 
    await deleteUser(id);
    getAllUsers();
    
  }
  

  return (
    <StyledTable>
      <TableHead>
        <THead >
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Email</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {
          users.map(user => (
            <TableRow key={user._id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" style={{marginRight: '10px'}} component = {Link} to = {`/edit/${user._id}`}>Edit</Button>
                <Button variant="contained" color="secondary"onClick={() =>deleteHandler(user._id)} >Delete</Button>
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </StyledTable>
  )  
}

export default AllUsers;

