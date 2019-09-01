const Asiento = require('../models/asiento');
const asientoCtrl = {};
 
asientoCtrl.getAsientos = async (req, res) => {
    const asientos = await Asiento.find();
    res.json(asientos);       
};

asientoCtrl.createAsiento = async (req, res) => {
    const asiento = new Asiento({
        horario:req.body.horario,
        dia: req.body.dia,
        usuario: req.body.usuario,
        asiento1: req.body.asiento1,
        asiento2: req.body.asiento2,
        asiento3: req.body.asiento3,
        asiento4: req.body.asiento4


        
    });
    await asiento.save();
    res.json({
        'status': 'Asiento Saved'
    });
};

asientoCtrl.getAsiento = async (req, res) => {
    const asiento = await Asiento.findById(req.params.id);
    res.json(asiento);
}

asientoCtrl.editAsiento = async (req, res) => {
    const { id } = req.params;
    const asiento = {
        horario:req.body.horario,
        dia: req.body.dia,
        usuario: req.body.usuario,
        asiento1: req.body.asiento1,
        asiento2: req.body.asiento2,
        asiento3: req.body.asiento3,
        asiento4: req.body.asiento4

   
   
    };
    await Asiento.findByIdAndUpdate(id, {$set: asiento}, {new: true});
    res.json({
        status: 'Asiento Updated'
    });
};

asientoCtrl.deleteAsiento = async (req, res) => {
    await Asiento.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Asiento Deleted'
    });
};

module.exports = asientoCtrl;
