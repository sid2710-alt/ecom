const Product=require("../model/product");
module.exports.create=async function(req,res){
    try{
        let product=await Product.findOne({name:req.body.name});
        if(product)
        {
            return res.status(200).json({message:"Product Already exist"});
        }
        await Product.create(req.body);
        return res.status(201).json({message:"Product Created",product:req.body});
    }

catch{
return res.status(500).json({message:"Got Error"});
}

}
module.exports.show=async function(req,res){
    try{
        console.log("HELLO")
let product=await Product.find({});
return res.status(201).json({message:"Product Found",product:product});
    }
    catch{
        return res.status(500).json({message:"Got Error"});
    }
}
module.exports.delete=async function(req,res){
    try{
        await Product.deleteOne({id:req.params.id});
        return res.status(201).json({message:"Product deleted"});
    }
    catch{
        return res.status(500).json({message:"Got Error"});
    }
}
module.exports.update=async function(req,res){
    try{
       




     let product=await Product.findOne({id:req.params.id});
      if(!product)
       {
         return res.status(200).json({message:"Product not Found"}); 
       }
       product.quantity=max(parseInt(product.quantity) + parseInt(req.params.number),0);
      await product.save();
      return res.status(201).json({message:"updated successfully"});
      
    }
    catch(e){
        console.log(e);
        return res.status(500).json({message:"Got Error"});
    }
}