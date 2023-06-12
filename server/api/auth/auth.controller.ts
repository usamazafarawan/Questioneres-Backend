
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
export const login = async function (req: any, res: any) {
  req.body.email = (req.body.email).toLowerCase();
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });
    console.log(user,'userv')

    if (user && (await bcrypt.compare(password, user.password as string))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY || config.TOKEN_KEY,
        {
          expiresIn: "24h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }

 

}




