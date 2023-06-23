import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from "@mui/material";
import {getUser, updateUser} from "../service/api.js";
import {useNavigate, useParams} from 'react-router-dom';


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

const EditUser = () =>{
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
        const fetchUser = async () =>{    
            const response = await getUser(id);
            setUser(response);
        }
        fetchUser();
    },[id]);


    const [user, setUser] = useState(defaultValue);
    const [formIsValid, setFormIsValid] = useState(false);
    const [nameIsValid,setNameIsValid] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [phoneIsValid, setPhoneIsValid] = useState(false);
    const [usernameIsValid, setUsernameIsValid] = useState(false);
    
    const changeHandler = async (event) =>{
        await setUser({...user, [event.target.name] : event.target.value})
        if(user.name.trim() !== '' ){
            await setNameIsValid(true);
        }else{
            await setNameIsValid(false);
        }
        if(user.username.trim() !== '' ){
            await setUsernameIsValid(true);
        }else{
            await setUsernameIsValid(false);
        }
        if(user.email.includes('@') && user.email.includes('.')&& user.email.length >= 5){
            await setEmailIsValid(true);
        }else{
            await setEmailIsValid(false);
        }
        if(user.phone.length >= 10 && user.phone.length <= 13){
            await setPhoneIsValid(true)
        }else{
            await setPhoneIsValid(false);
        }
        if(nameIsValid && phoneIsValid && emailIsValid && usernameIsValid){
            await setFormIsValid(true);
        }else{
            await setFormIsValid(false);
        }
        // console.log('name',nameIsValid);
        // console.log('email',emailIsValid);
        // console.log('phone',phoneIsValid);
        // console.log('form:',formIsValid);
    }

    const submitHandler = async () =>{
        await updateUser(id,user);
        navigate('/all');
    }

    return(
    <div>
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel >Name</InputLabel>
                <Input onChange = {changeHandler} name="name" value={user.name}/>
            </FormControl>

            <FormControl>
                <InputLabel >Username</InputLabel>
                <Input onChange = {changeHandler} name="username" value={user.username}/>
            </FormControl>

            <FormControl>
                <InputLabel >E-mail</InputLabel>
                <Input onChange = {changeHandler} name="email" value={user.email} />
            </FormControl>

            <FormControl>
                <InputLabel >Phone</InputLabel>
                <Input onChange = {changeHandler} name="phone" type="tel" value={user.phone}/>
            </FormControl>
            <FormControl>
                <Button variant="contained" disabled= {!formIsValid} onClick={submitHandler}>Edit User</Button>
            </FormControl>
            
        </Container>
    </div>
    );
}

export default EditUser;