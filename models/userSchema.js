const mongoose = require('mongoose')
const validator = require('validator')


const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
        // validate(value){
        //     if(!validator.isAlpha(value.replace(/\s/g, ''))){
        //         throw Error("Invalid!...Please enter Letters only")
        //     }
        // }
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true
        // validate(value){
        //     if(!validator.isEmail(value)){
        //         throw Error("Invalid!...Please enter valid email only")
        //     }
        // }
    },
    pswd:{
        type:String,
        required:true
    }
})

const users = new mongoose.model('users',userSchema)

module.exports = users

