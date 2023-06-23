import axios from 'axios';

const URL = 'http://localhost:8000'
export const addUser = async (data) =>{
    try{
        return await axios.post(`${URL}/add`, data);
    }catch(error){
        console.log(error)
    }
}

export const getUsers = async() =>{
    try{
        const response =  await axios.get(`${URL}/all`);
        return response.data;
    }catch(err){
        console.log('can not get users list', err);
    }
}

export const getUser = async(id) =>{    
    try{
        const response = await axios.get(`${URL}/edit/${id}`);
        // console.log(response.data);
        return response.data;
    }catch(err){
        console.log('can not get user', err);
    }
}
export const updateUser = async(id, data) =>{
    try{
        return await axios.patch(`${URL}/edit/${id}`, data);
    }catch(err){
        console.log('can not update user', err);
    }
}
export const deleteUser = async(id) =>{
    try{
        return await axios.delete(`${URL}/delete/${id}`);
    }catch(err){
        console.log('can not delete user', err);
    }
}