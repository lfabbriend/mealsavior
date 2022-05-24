import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/index.js';
dotenv.config(); //To get the url in a safe way (?

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, error => {
	if (error) console.error(error);
	else console.log('Connected to Database');
});

app.use(express.json())
	.use(express.urlencoded({ extended: false, limit: '5mb' }))
	.use('/', router)
	.listen(process.env.PORT || 3000, () => console.log('Server Started'));
