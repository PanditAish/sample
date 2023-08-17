require("dotenv").config();

const connectDB = require("./db/connectt");

const Product = require("./models/productp");

const ProductJson = require("./product.json");

const start = async () =>{
    try{
        await connectDB(process.env.MONGODB_APP_URL);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("sucess");
    }catch(error){
        console.log(error);
    }
};

start();
