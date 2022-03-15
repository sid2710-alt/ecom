const passport=require('passport');
const JWTStrategy=require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const User=require('../model/user');
let opts={
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:"namonamo",
}
passport.use(new JWTStrategy(opts,function(jwtPayLoad,done){
User.findById(jwtPayLoad._id,function(err,user){
    if(err)
    {
        console.log('Err in finding user');
        return;
    }
    if(user)
    {
        return done(null,user);
    }
    else
    return done(null,false);
   
})
}));
//delete token


module.exports=passport;