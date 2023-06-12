import express from "express";
import mongoose from "mongoose";
import http from "http";
import { routes } from "./routes";
import { port } from "./config/environment";

const cors = require("cors");
export const app = express();
const server = http.createServer(app);


app.use(express.json());
app.use(cors(
  {
    origin:"*"
  }
));
// app.use((req, res, next) => {
//   res.setHeader("Content-Type", "application/json");
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.setHeader("Access-Control-Allow-Methods","GET,PUT, POST, PATCH, DELETE, OPTIONS");
//   next();
// });
routes(app);

// const uri = "mongodb+srv://devadmission:RVtfDouTJOM914Ch@cluster0.c7gqu.mongodb.net/cluster0?retryWrites=true&w=majority";
const uri ="mongodb+srv://devadmission:n8uOXvKVwlYBZ8VE@cluster0.c7gqu.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri)
    .then(() => {
        console.log('Connected to database!',uri);
    })
    .catch(error => {
        console.log('Connection failed!:', error);
    });

server.listen(port, () => {
  console.log(`Express server listening ${port}`);
});

