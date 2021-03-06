const mongoose=require('mongoose')


const userSchema=mongoose.Schema({
    firstname:String,
    lastname:String,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    }
})
module.exports=mongoose.model('user',userSchema)
