const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 4000;
const connectDB = require("./db/connectt");
const cors = require('cors');

const product_route = require("./routes/product");

app.get("/", (req, res) =>{
   res.send("hi.. I am aish");
});

const corsOptions ={
   origin:'http://localhost:3000', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use("/admin/api", product_route);

const start = async () =>{
   try{
      await connectDB(process.env.MONGODB_APP_URL);
      app.listen(PORT, () =>{
        console.log(`${PORT} Yes, I am connected`);
      });
   }catch(error){
      console.log(error);
   }
}

start();