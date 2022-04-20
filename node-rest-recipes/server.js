import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import router from "./routes/index.js";
dotenv.config() //To get the url in a safe way (?

const app = express()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))



app.use(express.json())
    .use("/", router)
    .listen(3000, () => console.log("Server Started"));