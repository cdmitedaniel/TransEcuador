const User = require('../models/user');
const userCtrl = {};
 
userCtrl.getUsers = async (req, res) => {
    const users = await User.find();    
    res.json(users);
};

userCtrl.createUser = async (req, res) => {
    const user = new User({
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
    await user.save();
    res.json({
        'status': 'User Saved'
    });
};

userCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

userCtrl.editUser = async (req, res) => {
    const { id } = req.params;
    const user = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        nacimiento: req.body.nacimiento,
        email: req.body.email,
        password: req.body.password,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        cedula: req.body.cedula,
        ciudad: req.body.ciudad  
    };
    await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({
        status: 'User Updated'
    });
};

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({
        status: 'User Deleted'
    });
};

module.exports = userCtrl;
