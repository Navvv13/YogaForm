import mongoose from "mongoose";
import express from "express";
import Cors from 'cors';
import yogaRouter from "./routes/yoga.js";

const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());
app.use(Cors());
app.use('/yoga',yogaRouter);

const DBusername = "user";
const DBpassword = "user";
const DBname = "cluster0";
const DBcluster = "yrokyab";


const connection_url = `mongodb+srv://${DBusername}:${DBpassword}@${DBname}.${DBcluster}.mongodb.net/?retryWrites=true&w=majority`;

mongoose
    .connect(connection_url)
    .then((result) => {
        console.log("Connected To Database");
        app.listen(port, () => console.log(`Listening on Localhost:${port}`))
    })
    .catch((err) => {
        console.log('\x1b[31m',"Error Connecting to Database");
    });