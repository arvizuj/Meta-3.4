const express = require('express');
const router = express.Router();
const ubicacionesController = require('../controllers/ubicacionController');

router.get('/', ubicacionesController.obtenerDatos);

router.get('/id:id', ubicacionesController.obtenerPorId);

router.post('/', ubicacionesController.agregarUbicacion);

router.put('/id:id', ubicacionesController.actualizarUbicacion);

router.delete('/id:id', ubicacionesController.eliminarUbicacion);

module.exports = router;