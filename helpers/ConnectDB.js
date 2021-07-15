const mongoose=require('mongoose')
const config=require('Config')



const dbConnect=()=>{
mongoose.connect(config.get("DB_CONNECTION.URI"),{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false,useCreateIndex:true},(err)=>{
    if (err) throw err
    console.log('database connected')
})}
module.exports= dbConnect