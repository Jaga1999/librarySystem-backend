const express = require("express");
const rateLimit = require('express-rate-limit');

const connectDb = require("./utils/db");
const dotenv = require("dotenv").config();
const errorHandler= require ("./middlewares/errorHandler");
const adminService = require("./services/adminService");
const userService = require('./services/userService');


connectDb();
const app = express();


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 30,
  message: 'Too many requests from this IP, please try again later',
});

app.use('/api', limiter);


const port = process.env.PORT || 3000;

app.use(express.json());

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
