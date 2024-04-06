const ubicacionModel = require('../models/ubicacionModel');
const Ubicacion = ubicacionModel.Ubicacion;

/**
 * Función asíncrona para obtener todos los datos del tipo Ubicación
 * @param {*} req 
 * @param {*} res 
 */
const obtenerDatos = async function (req, res) {
    let p = ubicacionModel.obtenerTodos();
    await res.json(p);
}

/**
 * Función asíncrona para buscar una ubicación por su ID
 * @param {*} req 
 * @param {*} res 
 */
const obtenerPorId = async function (req, res) {
    const id = parseInt(req.params.id);
    let p = ubicacionModel.buscarPorId(id);
    await res.json(p);
}

/**
 * Función asíncrona para agregar una nueva ubiación al registro
 * @param {*} req 
 * @param {*} res 
 */
const agregarUbicacion = async function (req, res) {
    const { id, descripcion, activosAsociados, imagen } = req.body;
    const nuevaUbicacion = new Ubicacion(id, descripcion, activosAsociados, imagen);
    ubicacionModel.agregar(nuevaUbicacion);
    res.status(201).send('Ubicacion agregado con éxito');
}

/**
 * Función asíncrona para actualizar una ubicación existente en el registro
 * @param {*} req 
 * @param {*} res 
 */
const actualizarUbicacion = async function (req, res) {
    const id = parseInt(req.params.id);
    const nuevaUbicacion = req.body;
    ubicacionModel.actualizar(id, nuevaUbicacion);
    res.send('Ubicacion actualizada con éxito');
}

/**
 * Función asíncrona para eliminar una ubicación existente en el registro
 * @param {*} req 
 * @param {*} res 
 */
const eliminarUbicacion = async function (req, res) {
    const id = parseInt(req.params.id);
    ubicacionModel.eliminar(id);
    res.send('Ubicacion eliminada con éxito');
}

//Exportación de todos los métodos
exports.obtenerDatos = obtenerDatos;
exports.obtenerPorId = obtenerPorId;
exports.agregarUbicacion = agregarUbicacion;
exports.actualizarUbicacion = actualizarUbicacion;
exports.eliminarUbicacion = eliminarUbicacion;