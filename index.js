const express = require("express");

const app = express();

// load config from env file

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware

app.use(express.json());

const todoRoutes = require("./routes/todos");

// mount the route

app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
  console.log("listening on port 7000");
});

// connect db

const dbConnect = require("./config/database");
dbConnect();


// default route 

app.get("/",(req,res)=>{
    res.send(`<h1>this is home page</h1>`)
})