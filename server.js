import express, { json } from "express";
import rateLimit from 'express-rate-limit';

import connectDb from "./utils/db";
const dotenv = require("dotenv").config();
import errorHandler from "./middlewares/errorHandler";



connectDb();
const app = express();


const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, 
  max: 20,
  message: 'Too many requests from this IP, please try again later',
});

app.use('/api', limiter);


const port = process.env.PORT || 300
app.use(json());

app.use("/api/books", require("./routes/bookRoutes"));
app.use('/admin',require("./routes/adminRoutes"));
app.use('/assistantLibrarian',require("./routes/assistantLibrarianRoutes"));
app.use('/librarian',require("./routes/librarianRoutes"));
app.use('/accountant',require("./routes/accountantRoutes"));
app.use('/user',require("./routes/userRoutes"));



app.use(errorHandler);



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });