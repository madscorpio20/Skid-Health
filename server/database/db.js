import mongoose from "mongoose"

const Connection = async (username, password) =>{
    console.log(username);
    const URL = `mongodb+srv://${username}:${password}@cluster0.sdfd7e8.mongodb.net/skid-health?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true , useNewUrlParser: true})
        console.log('connected to database');
    }catch(error){
        console.log('error in connecting to database', error);
    }
}

export default Connection;