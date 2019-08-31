const User = require('../models/user');
const authCtrl = {};
 
authCtrl.login = async (req, res) => {
        
    let user = await User.findOne({email: req.body.email});
    if(user){
        if(user.password == req.body.password){
            res.json(user);
        } else {
            res.json(401, {
                'status': 'Login failed, User or Password Wrong'
            });
        }
    }
    else { 
        res.json(401, {
            'status': 'Login failed, User not registered'
        });
    }
};

authCtrl.register = async (req, res) => {
    let user = await User.find({email: req.body.email});
    
    if(user.length == 0){
        //let rolList = await Roles.find({name: 'usuario'});
        user = new User({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            nacimiento: req.body.nacimiento,
            email: req.body.email,
            password: req.body.password,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            cedula: req.body.cedula,
            ciudad: req.body.ciudad
        });
        user.save().then(() => {
            res.json(user)
        });
    } else {
        res.json(302, {
            'status': 'User already exists'
        });
    }
        
};
  

module.exports = authCtrl;
