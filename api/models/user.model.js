import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },

    avatar:{
        type: String,
        default: "https://lh3.googleusercontent.com/a/ACg8ocI4wjVWgeP_b3VR4tByXUq3C_TyfW3IoT_t4o2ku7muDYY0fJA=s96-c"
    },
},{timestamps:true});

const User = mongoose.model('User',userSchema)

export default User;