const mongoose = require('mongoose')

const DB = process.env.DATABASE 

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    dbName: "MoonhiveUser"

}).then(()=>{
    console.log('MongoDb Connected Successfully');
}).catch((err)=>{
    console.log(err);
})