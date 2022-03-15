const express=require('express');
const router=express.Router();
const passport=require("passport");
const productController=require("../controller/productController");
const userController=require("../controller/UserController")
router.post('/products/create',passport.authenticate('jwt',{session:false}),productController.create);
router.get('/products',productController.show);
router.delete('/products/:id',passport.authenticate('jwt',{session:false}),productController.delete);
router.patch('/products/:id/update_quantity/:number',passport.authenticate('jwt',{session:false}),productController.update)
router.post('/user/create',userController.create);
router.post('/create-session',userController.create_session);
router.get('/user/logout',passport.authenticate('jwt',{session:false}),function(req,res){
   req.logOut();
   return res.status(200).json({
       message:"logged out",
   })

});

module.exports=router;  