const express = require('express');
const router = express.Router();
const responsablesController = require('../controllers/responsableController');

router.get('/', responsablesController.obtenerDatos);

router.get('/id:id', responsablesController.obtenerPorId);

router.get('/numEmpleado:num', responsablesController.obtenerPorNumeroEmpleado);

router.post('/', responsablesController.agregarResponsable);

router.put('/id:id', responsablesController.actualizarResponsable);

router.delete('/id:id', responsablesController.eliminarResponsable);

module.exports = router;