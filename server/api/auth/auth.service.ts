import * as config from '../../config/environment/index'
import jwt from 'jsonwebtoken';




export const verifyToken = (req:any, res:any, next:any) => {
  console.log(req, res)
    // return true
  const token =
    req?.body?.token || req?.query?.token || req?.headers["x-access-token"];

  if (!token) {
    return res?.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, (config.TOKEN_KEY || process.env.TOKEN_KEY));
    req.user = decoded;
  } catch (err) {
    return res?.status(401).send("Invalid Token");
  }
  return next();
}