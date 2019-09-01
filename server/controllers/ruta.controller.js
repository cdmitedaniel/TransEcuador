const Ruta = require('../models/ruta');
const rutaCtrl = {};
 
rutaCtrl.getRutas = async (req, res) => {
    const rutas = await Ruta.find();
    res.json(rutas);       
};

rutaCtrl.createRuta = async (req, res) => {
    const ruta = new Ruta({
        ruta: req.body.ruta,
        costopiso1: req.body.costopiso1,
        costopiso2: req.body.costopiso2
    });
    await ruta.save();
    res.json({
        'status': 'Ruta Saved'
    });
};

rutaCtrl.getRuta = async (req, res) => {
    const ruta = await Ruta.findById(req.params.id);
    res.json(ruta);
}

rutaCtrl.editRuta = async (req, res) => {
    const { id } = req.params;
    const ruta = {
        ruta: req.body.ruta,
        costopiso1: req.body.costopiso1,
        costopiso2: req.body.costopiso2
    };
    await Ruta.findByIdAndUpdate(id, {$set: ruta}, {new: true});
    res.json({
        status: 'Ruta Updated'
    });
};

rutaCtrl.deleteRuta = async (req, res) => {
    await Ruta.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Ruta Deleted'
    });
};

module.exports = rutaCtrl;
