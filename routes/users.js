var express = require('express');
var router = express.Router();

const CONDUCTORES = [{
    name: "Omar",
    pais: "Peru",
    dni: 72188055,
    placa: 457,
    sexo: 'F'
}, {
    name: "Luis Farfán",
    pais: "Peru",
    dni: 72188059,
    placa: 454,
    sexo: 'M'
}, {
    name: "Joel",
    pais: "Peru",
    dni: 72188042,
    placa: 445,
    sexo: 'M'
}];

function obtenerConductorByPlaca(placa) {
    const conductor = CONDUCTORES.find(function (c, i) {
        return c.placa === Number(placa);
    });
    return conductor;
}

function obtenerConductorByDni(dni) {
    const conductor = CONDUCTORES.find(function (c, i) {
        return c.dni === Number(dni);
    });
    return conductor;
}


router.get('/by-placa/:placa', function (req, res, next) {
    const conductor = obtenerConductorByPlaca(req.params.placa);
    if (conductor) res.send({pais: conductor.pais, dniConductor: conductor.dni});
    else res.status(404).send('Not found');
});

router.get('/by-dni/:dniConductor', function (req, res, next) {
    const conductor = obtenerConductorByDni(req.params.dniConductor);
    if (conductor) res.send({name: conductor.name, dni: conductor.dni, sexo: conductor.sexo})
    else res.status(404).send('Not found');
});

module.exports = router;
