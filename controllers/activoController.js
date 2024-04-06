const activoModel = require('../models/activoModel');
const Activo = activoModel.Activo;
 /**
  * Función asíncrona para obtener todos los datos del tipo Activo
  * @param {*} req 
  * @param {*} res 
  */
const obtenerDatos = async function (req, res) {
    let p = activoModel.obtenerTodos();
    await res.json(p);
}
/**
 * Función asíncrona para buscar un activo por su ID
 * @param {*} req 
 * @param {*} res 
 */
const obtenerPorId = async function (req, res) {
    const id = parseInt(req.params.id);
    let p = activoModel.buscarPorId(id);
    await res.json(p);
}

/**
 * Función asíncrona para buscar un activo por su número de serie
 * @param {*} req 
 * @param {*} res 
 */
const obtenerPorNumSerie = async function (req, res) {
    const serie = parseInt(req.params.serie);
    let p = activoModel.buscarPorNumSerie(serie);
    await res.json(p);
}

/**
 * Función asíncrona para agregar un nuevo activo al registro
 * @param {*} req 
 * @param {*} res 
 */
const agregarActivo = async function (req, res) {
    const { id, serie, numInv, tipo, desc, ubicacion, responsable, imagen } = req.body;
    const nuevoActivo = new Activo(id, serie, numInv, tipo, desc, ubicacion, responsable, imagen);
    activoModel.agregar(nuevoActivo);
    res.status(201).send('Activo agregado con éxito');
}

/**
 * Función asíncrona para actualizar un activo existente en el registro
 * @param {*} req 
 * @param {*} res 
 */
const actualizarActivo = async function (req, res) {
    const id = parseInt(req.params.id);
    const nuevoActivo = req.body;
    activoModel.actualizar(id, nuevoActivo);
    res.send('Activo actualizado con éxito');
}

/**
 * Función asíncrona para eliminar un activo existente en el registro
 * @param {*} req 
 * @param {*} res 
 */
const eliminarActivo = async function (req, res) {
    const id = parseInt(req.params.id);
    activoModel.eliminar(id);
    res.send('Activo eliminado con éxito');
}

//Exportación de todos los métodos
exports.obtenerDatos = obtenerDatos;
exports.obtenerPorId = obtenerPorId;
exports.obtenerPorNumSerie = obtenerPorNumSerie;
exports.agregarActivo = agregarActivo;
exports.actualizarActivo = actualizarActivo;
exports.eliminarActivo = eliminarActivo;