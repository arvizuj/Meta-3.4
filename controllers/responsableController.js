const responsableModel = require('../models/responsableModel');
const Responsable = responsableModel.Responsable;

/**
 * Función asíncrona para obtener todos los datos del tipo Responsable
 * @param {*} req 
 * @param {*} res 
 */
const obtenerDatos = async function (req, res) {
    let p = responsableModel.obtenerTodos();
    await res.json(p);
}

/**
 * Función asíncrona para buscar un responsable por su ID
 * @param {*} req 
 * @param {*} res 
 */
const obtenerPorId = async function (req, res) {
    const id = parseInt(req.params.id);
    let p = responsableModel.buscarPorId(id);
    await res.json(p);
}

/**
 * Función asíncrona para buscar un activo por su número de empleado
 * @param {*} req 
 * @param {*} res 
 */
const obtenerPorNumeroEmpleado  = async function (req, res) {
    const num = parseInt(req.params.num);
    let p = responsableModel.buscarPorNumEmpleado(num);
    await res.json(p);
}

/**
 * Función asíncrona para agregar un nuevo responsable al registro
 * @param {*} req 
 * @param {*} res 
 */
const agregarResponsable = async function (req, res) {
    const { id, numEmpleado, Nombre, ActivosAsociados, ImagenResponsable } = req.body;
    const nuevoResponsable = new Responsable(id, numEmpleado, Nombre, ActivosAsociados, ImagenResponsable);
    responsableModel.agregar(nuevoResponsable);
    res.status(201).send('Responsable agregado con éxito');
}

/**
 * Función asíncrona para actualizar un responsable existente en el registro
 * @param {*} req 
 * @param {*} res 
 */
const actualizarResponsable = async function (req, res) {
    const id = parseInt(req.params.id);
    const nuevoResponsable = req.body;
    responsableModel.actualizar(id, nuevoResponsable);
    res.send('Responsable actualizado con éxito');
}

/**
 * Función asíncrona para eliminar un responsable existente en el registro
 * @param {*} req 
 * @param {*} res 
 */
const eliminarResponsable = async function (req, res) {
    const id = parseInt(req.params.id);
    responsableModel.eliminar(id);
    res.send('Responsable eliminado con éxito');
}

//Exportación de todos los métodos
exports.obtenerDatos = obtenerDatos;
exports.obtenerPorId = obtenerPorId;
exports.obtenerPorNumeroEmpleado = obtenerPorNumeroEmpleado;
exports.agregarResponsable = agregarResponsable;
exports.actualizarResponsable = actualizarResponsable;
exports.eliminarResponsable = eliminarResponsable;