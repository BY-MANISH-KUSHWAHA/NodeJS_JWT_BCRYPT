const UserModel = require("../Model/users")

exports.signUp = (req,res) => {
    console.log(req.body);
    const user = new UserModel({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    user.save().then((data)=>{
        console.log(data);
        res.send(data);
    }).catch((err) => {
        console.log(err);
        res.send(err);
    })
}



exports.login = (req,res) =>{

    const email = req.body.email;
    const pswd = req.body.password;

    user.findOne({email:email})
    

    
    
}