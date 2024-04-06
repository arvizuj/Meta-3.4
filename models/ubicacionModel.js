/**
 * El arreglo de ubicaciones con las que se inicia
 */
let ubicaciones = [
    {id: 10, descripcion: "Salón A1", activosAsociados: [101], imagen: "https://clipground.com/images/computer-room-clipart-9.jpg" },
    {id: 20, descripcion: "Salón B1", activosAsociados: [202], imagen: "https://img.freepik.com/vector-gratis/diseno-fondo-oficina_23-2148635449.jpg?w=360" },
    {id: 30, descripcion: "Salón A2", activosAsociados: [404], imagen: "https://i.pinimg.com/736x/90/29/e2/9029e2f75ffae946a2a54ff542449b10.jpg" },
    {id: 40, descripcion: "Salón B2", activosAsociados: [303], imagen: "https://static.vecteezy.com/system/resources/previews/027/188/466/non_2x/school-classroom-cartoon-style-high-quality-ai-image-generated-photo.jpg" }
]

/**
 * Constructor de la clase Ubicación
 */
class Ubicacion {
    constructor(id, descripcion, activosAsociados, imagen) {
        this.id = id;
        this.descripcion = descripcion;
        this.activosAsociados = activosAsociados;
        this.imagen = imagen;
    }
}

/**
 * Función que permite encontrar todas las ubicciones que se encuentran registrados
 * @returns el arreglo que contiene las ubicaciones registradas.
 */
let obtenerTodos = function () {
    return ubicaciones;
}

/**
 * Función que permite realizar una búsqueda en el arreglo de ubicaciones registradas para encontrar la ubicación solicitado por id
 * @param {*} id el id a buscar
 * @returns la ubicación solicitada 
 */
let buscarPorId = function (id) {
    for (let i = 0; i < ubicaciones.length; i++) {
        if (id == ubicaciones[i].id) {
            const element = ubicaciones[i];
            return element;
        }
    }
}

/**
 * Función que permite agregar una nueva ubicación al arreglo de ubicaciones
 * @param {*} ubicacion la ubicacion que se desea agregar 
 */
let agregar = function (ubicacion) {
    ubicaciones.push(ubicacion)
}

/**
 * Función que permite actualizar la información de la ubicación indicada por id
 * @param {*} id el id de la ubicación que se quiere actualizar
 * @param {*} nuevaUbicacion la ubicación con la que se va a reemplazar
 */
let actualizar = function (id, nuevaUbicacion) {
    const i = ubicaciones.findIndex(ubicacion => ubicacion.id == id);
    ubicaciones[i] = nuevaUbicacion;
}

/**
 * Función que permite eliminar una ubicación a través de su id
 * @param {*} id el id de la ubicación que se desea eliminar
 */
let eliminar = function (id) {
    ubicaciones = ubicaciones.filter(ubicacion => ubicacion.id !== id);
}

//Exportación de todos los métodos
exports.obtenerTodos = obtenerTodos;
exports.buscarPorId = buscarPorId;
exports.agregar = agregar;
exports.actualizar = actualizar;
exports.eliminar = eliminar;
exports.Ubicacion = Ubicacion;