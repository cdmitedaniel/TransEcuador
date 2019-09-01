const Horario = require('../models/horario');
const horarioCtrl = {};
 
horarioCtrl.getHorarios = async (req, res) => {
    const horarios = await Horario.find();
    res.json(horarios);       
};

horarioCtrl.createHorario = async (req, res) => {
    const horario = new Horario({
        ruta:req.body.ruta,
        horasalida: req.body.horasalida,
        chofer: req.body.chofer,
        placa: req.body.placa       
    });
    await horario.save();
    res.json({
        'status': 'Horario Saved'
    });
};

horarioCtrl.getHorario = async (req, res) => {
    const horario = await Horario.findById(req.params.id);
    res.json(horario);
}

horarioCtrl.editHorario = async (req, res) => {
    const { id } = req.params;
    const horario = {
        ruta:req.body.ruta,
        horasalida: req.body.horasalida,
        chofer: req.body.chofer,
        placa: req.body.placa
    };
    await Horario.findByIdAndUpdate(id, {$set: horario}, {new: true});
    res.json({
        status: 'Horario Updated'
    });
};

horarioCtrl.deleteHorario = async (req, res) => {
    await Horario.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Horario Deleted'
    });
};

horarioCtrl.getHorariorutas = async (req, res) => {
    const { id } = req.params;
    const horario = await Horario.find({ 'ruta': id});
    res.json(horario);
}
module.exports = horarioCtrl;
