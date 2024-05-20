import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import serverless from 'serverless-http';
import dotenv from 'dotenv';
import AWS from 'aws-sdk';

dotenv.config();
import regulationRoutes from './routes/index.js';
import { connectDb } from './db/index.js';
import loggerMiddleware from './middleware/logger.js';

const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

AWS.config.update({
  region,
  accessKeyId,
  secretAccessKey,
});

const app = express();

const PORT = process.env.APP_PORT | 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Establish Connection with Database
connectDb();

// Middleware
app.use(loggerMiddleware);

// Routes
app.use('/regulation', regulationRoutes);

app.all('/*', (req, res) => {
  res.status(404).send('Page Not found');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export const handler = serverless(app);
