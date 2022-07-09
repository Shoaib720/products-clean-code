import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

const BASE_URL = 'http://localhost';

app.post(BASE_URL)

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
})