const express=require('express')
const app=express()
const dbConnect=require('./helpers/ConnectDB')
const config = require('Config') 





const PORT=config.get("SERVER_CONFIG.PORT")|| 5000
dbConnect()
//middlewares'
app.use(express.json());
app.use('/api/user', require('./routes/userRoutes'))







app.listen(PORT, () => {
    
    console.log(`the server is listening on http://localhost:${PORT}`);
  });

