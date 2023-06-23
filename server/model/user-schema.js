import mongoose from "mongoose";
// import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
    id: String,
    name: String,
    username: String, 
    phone: String,
    email: String,
})

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');

const User = mongoose.model('user', userSchema);

export default User;

