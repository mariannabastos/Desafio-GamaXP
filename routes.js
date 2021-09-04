const express = require('express');
const controleCandidato = require('./controle/controleCandidato');
const routes = new express.Router();

routes.post('/registro', controleCandidato.register);
routes.get('/', (req, res) => {
    res.send('Servidor GamaXP está on.');
});
module.exports = routes;
