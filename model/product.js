const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    id: {
        type: String,
        required: true,
       },
     name:{
        type: String,
        required: true,
     },
     quantity:{
        type: String,
        required: true,
     }  

},{
    timestamps:true,
});
 const Product=mongoose.model('Product',productSchema);
 module.exports=Product;