import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},{
    timestamps:true // by adding this it will make sure that document must have createdAt & updatedAt fields
});

const Product = mongoose.model('Product',productSchema);
// The 'Product' keyword written above mongo will convert it into products(first letter small and whole world plural)

export default Product;