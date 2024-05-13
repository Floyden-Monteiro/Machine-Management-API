import express from 'express';
import apiRoute from './routes/machineRoute.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', apiRoute);

export default app;
