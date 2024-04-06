/**
 * El arreglo de responsables con los que se inicia
 */
let responsables = [
    {id: 1, numEmpleado: 132, nombre: "Teresa Allende", activosAsociados: [303, 404], imagenResponsable: "https://static.wikia.nocookie.net/animalcrossing/images/0/00/Tere_%28City_Folk%29.png/revision/latest/scale-to-width-down/250?cb=20180908030445&path-prefix=es"},
    {id: 2, numEmpleado: 11, nombre: "Miguel Arándano", activosAsociados: [202], imagenResponsable: "https://static.wikia.nocookie.net/animalcrossing/images/9/9c/Ar%C3%A1ndano_%28Wild_World%29.png/revision/latest/scale-to-width-down/250?cb=20190613063533&path-prefix=es"},
    {id: 3, numEmpleado: 13, nombre: "Marco Felix", activosAsociados: [101], imagenResponsable: "https://images.wikidexcdn.net/mwuploads/esacrossing/thumb/f/f7/latest/20200820073316/F%C3%A9lix_%28New_Horizons%29.png/150px-F%C3%A9lix_%28New_Horizons%29.png"}
]
 /**
  * El constructor de la clase Responsable
  */
class Responsable {
    constructor(id, numEmpleado, nombre, activosAsociados, imagenResponsable) {
        this.id = id;
        this.numEmpleado = numEmpleado;
        this.nombre = nombre;
        this.activosAsociados = activosAsociados;
        this.imagenResponsable = imagenResponsable;
    }
}

/**
 * Función que permite encontrar todos los responsables que se encuentran registrados
 * @returns el arreglo que contiene los responsables registrados.
 */
let obtenerTodos = function () {
    return responsables;
}

/**
 * Función que permite realizar una búsqueda en el arreglo de responsables registrados para encontrar el responsable solicitado por id
 * @param {*} id el id a buscar
 * @returns el responsable solicitado 
 */
let buscarPorId = function (id) {
    for (let i = 0; i < responsables.length; i++) {
        if (id == responsables[i].id) {
            const element = responsables[i];
            return element;
        }
    }
}

/**
 * Función que permite realizar una búsqueda en el arreglo de responsables registrados para encontrar el responsable solicitado por número de empleado
 * @param {*} numEmpleado número de empleado a buscar
 * @returns el responsable solicitado
 */
let buscarPorNumEmpleado = function (numEmpleado) {
    for (let i = 0; i < responsables.length; i++) {
        if (numEmpleado == responsables[i].numEmpleado) {
            const element = responsables[i];
            return element;
        }
    }
}

/**
 * Función que permite agregar un nuevo responsable al arreglo de responsables
 * @param {*} responsable el responsable que se desea agregar
 */
let agregar = function (responsable) {
    responsables.push(responsable);
}

/**
 * Función que permite actualizar la información del responsable indicado
 * @param {*} id el id del responsable que se quiere actualizar
 * @param {*} nuevoResponsable el responsable con el que se va a reemplazar 
 */
let actualizar = function (id, nuevoResponsable) {
    const i = responsables.findIndex(responsable => responsable.id == id);
    responsables[i] = nuevoResponsable;
}

/**
 * Función que permite eliminar un responsable a través de su id
 * @param {*} id el id del responsable que se desea eliminar
 */
let eliminar = function (id) {
    responsables = responsables.filter(responsable => responsable.id !== id);
}

//Exportación de todos los métodos
exports.obtenerTodos = obtenerTodos;
exports.buscarPorId = buscarPorId;
exports.buscarPorNumEmpleado = buscarPorNumEmpleado;
exports.agregar = agregar;
exports.actualizar = actualizar;
exports.eliminar = eliminar;
exports.Responsable = Responsable;