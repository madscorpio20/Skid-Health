import { useState } from "react";
import styled from "@emotion/styled";
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from "@mui/material";
import {addUser} from "../service/api";
import {useNavigate} from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 45%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top: 20px;
    }
`

const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: '',
}

const AddUser = () =>{
    const navigate = useNavigate();

    const [user, setUser] = useState(defaultValue);
    const [formIsValid, setFormIsValid] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [nameIsValid, setNameIsValid] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [emailIsValid, setEmailIsValid] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [phoneIsValid, setPhoneIsValid] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [usernameIsValid, setUsernameIsValid] = useState(false);
    
    
    const changeHandler = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value,
        }));
      
        // Perform validation based on input values
        let isNameValid = false;
        let isUsernameValid = false;
        let isEmailValid = false;
        let isPhoneValid = false;
      
        if (name.trim() !== '') {
          isNameValid = true;
        }
      
        if (user.username.trim() !== '') {
          isUsernameValid = true;
        }
      
        if (user.email.includes('@') && user.email.includes('.') && user.email.length >= 5) {
          isEmailValid = true;
        }
      
        if (/^\d{10}$/.test(value)) {
            isPhoneValid = true;
        }
        
      
        // Update validation state variables
        setNameIsValid(isNameValid);
        setUsernameIsValid(isUsernameValid);
        setEmailIsValid(isEmailValid);
        setPhoneIsValid(isPhoneValid);
      
        // Check overall form validity
        const isFormValid = isNameValid && isUsernameValid && isEmailValid && isPhoneValid;
        setFormIsValid(isFormValid);
      };
      

    const submitHandler = async () =>{
        await addUser(user);
        navigate('/all');
    }

    return(
    <div>
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel >Name</InputLabel>
                <Input onChange = {changeHandler} name="name"/>
            </FormControl>

            <FormControl>
                <InputLabel >Username</InputLabel>
                <Input onChange = {changeHandler} name="username"/>
            </FormControl>

            <FormControl>
                <InputLabel >E-mail</InputLabel>
                <Input onChange = {changeHandler} name="email"  />
            </FormControl>

            <FormControl>
                <InputLabel >Phone</InputLabel>
                <Input onChange = {changeHandler} name="phone" type="tel"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" disabled= {!formIsValid} onClick={submitHandler}>Add User</Button>
            </FormControl>
            
        </Container>
    </div>
    );
}

export default AddUser

