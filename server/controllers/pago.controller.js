const Pago = require('../models/pago');
const pagoCtrl = {};
 
pagoCtrl.getPagos = async (req, res) => {
    const pagos = await Pago.find();
    res.json(pagos);       
};

pagoCtrl.createPago = async (req, res) => {
    const pago = new Pago({
        usuario:req.body.usuario,
        nombretarjeta:req.body.nombretarjeta,
        numerotarjeta: req.body.numerotarjeta
        
    });
    await pago.save();
    res.json({
        'status': 'Pago Saved'
    });
};

pagoCtrl.getPago = async (req, res) => {
    const pago = await Pago.findById(req.params.id);
    res.json(pago);
}

pagoCtrl.editPago = async (req, res) => {
    const { id } = req.params;
    const pago = {
        usuario:req.body.usuario,
        nombretarjeta:req.body.nombretarjeta,
        numerotarjeta: req.body.numerotarjeta
       


   
   
    };
    await Pago.findByIdAndUpdate(id, {$set: pago}, {new: true});
    res.json({
        status: 'Pago Updated'
    });
};

pagoCtrl.deletePago = async (req, res) => {
    await Pago.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Pago Deleted'
    });
};

module.exports = pagoCtrl;
