const users = require("../models/userSchema");

exports.userRegister=async(req,res)=>{
    console.log(req);
    const {fname,phone,email,pswd}=req.body
    if(!fname||!phone||!email||!pswd){
        res.status(403).json("All inputs are Required")
    }
    try {
        const user = await users.findOne({phone})
        if(user){
            res.status(403).json("User already exist")
        }
        else{
            const newUser = new users({
                fname,phone,email,pswd
            })
            await newUser.save()
            res.status(200).json(newUser)
        }       
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.userLogin=async(req,res)=>{
    const{phone,pswd}=req.body
    if(!phone||!pswd){
        res.status(403).json("All inputs are required")
    }
    try {
        const user = await users.findOne({phone})

        if (!user) {
            res.status(401).json("Invalid username");
            return;
          }
        

        if (user.pswd !== pswd) {
            res.status(401).json("Invalid Password");
            return;
          }
          else{
            res.status(200).json("Login successful");
          }
    } catch (error) {
        res.status(401).json(error)

    }
}


  

