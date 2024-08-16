const mongoose = require('mongoose');
const connectDb = async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Practice1");
        console.log("Database Connected Successfully");
        
    } catch (error) {
        console.log(error);
        
    }
}
module.exports = connectDb;