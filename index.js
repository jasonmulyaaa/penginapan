import express from "express";
// import cors from 'cors';
import UserRoute from './routes/UserRoute.js';
import db from './config/database.js';

const app = express();
const port = 8000;

// app.use(cors);
app.use(express.json());
app.use(UserRoute);

db.sync() // This creates the table based on the model
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running`);
    });
  })
  .catch(error => {
    console.error('Error syncing the database:', error);
  });