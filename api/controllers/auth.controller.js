import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
// import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, password, email } = req.body;
  const hashedPassword = bcryptjs.hashSync(password,10);
  const newUser = new User({ username,password: hashedPassword,email });
try{
    await newUser.save();
    res.status(201).json("user created successfully");
}catch(error){
      // res.status(500).json(error.message);
      next(error);

     // next(errorHandler(550,'error from the function'));
}

 
};
