const express = require('express');
const router = express.Router();
const activosController = require('../controllers/activoController');

router.get('/', activosController.obtenerDatos);

router.get('/id:id', activosController.obtenerPorId);

router.get('/serie:serie', activosController.obtenerPorNumSerie);

router.post('/', activosController.agregarActivo);

router.put('/id:id', activosController.actualizarActivo);

router.delete('/id:id', activosController.eliminarActivo);

module.exports = router;