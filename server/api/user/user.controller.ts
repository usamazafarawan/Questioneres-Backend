import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'
import { User } from "../user/user.model";
import * as config from '../../config/environment/index'



/**
 * adds user in User Table.
 * @param req
 * @param res
 * @returns
 */
export const addUser = async function (req: any, res: any) {
  console.log(req.body, 'req.body')
   try {
     const user = req.body;
     user.email = user.email.toLowerCase()
     user.password =  await bcrypt.hash(user.password, 10);

    // Validate user input
    if (!(user.email && user.password && user.role && user.name.first)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email: user.email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    // Create user in our database
    const newUser = await User.create(user);

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email: newUser.email },
      process.env.TOKEN_KEY || config.TOKEN_KEY,
      {
        expiresIn: "24h",
      }
    );
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
  }
};
