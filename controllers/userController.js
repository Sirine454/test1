const User=require('../models/UserSchema')
const bcrybt = ('bcryptjs')
const jwt =require('jsonwebtoken')


const register = async(req,res)=>
{
    try {
        const {firstname,lastname,password,email}=req.body
        const user =await User.findOne({email})
        if (user)
        return  res.status(400).json({errors:[{msg:'user exist!'}] })
        const newUser = new User ({
            firstname,
            lastname,
            email,
            password

        })
           const salt = await bcrybt.genSaltSync(10);
           const hash = await bcrybt.hash(newUser.password, salt);
           newUser.password= hash
           const registredUser= await newUser.save()
           const payload={
               sub: registredUser._id
           }
           const token = await jwt.sign(payload,config.get("JWT_CONFIG.SECRET"));
           res.json({token})

    } catch (err) {
        res.status(500).json({errors:[{msg:err.message}] })
    }
}
module.exports= {register}