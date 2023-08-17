const Product = require("../models/productp");

const getAllProduct = async (req, res) =>{
   const { title } = req.query;
   const queryObject = {};

   if(title){
      queryObject.title = title;
   }

    console.log(queryObject);

   const apiData = await Product.find(queryObject);
   res.status(200).json({ apiData });
};

const getAllProductText = async (req, res) =>{
   const apiData = await Product.find(req.query);
   res.status(200).json({ apiData });
 };

 module.exports = { getAllProduct, getAllProductText}