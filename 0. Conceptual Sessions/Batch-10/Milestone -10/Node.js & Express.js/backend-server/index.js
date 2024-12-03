import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import { dbConnect, getDatabase } from './db.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFound } from './middleware/notFound.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//* Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//* Initialize MongoDB
await dbConnect();

//* MongoDB Collections
export const users = getDatabase().collection('users');

//* Routes

//* Error Handler
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
