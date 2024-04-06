/**
 * El arreglo de activos con los que se inicia
 */
let activos = [
    {id: 101, serie: 401, numInv: 25, tipo: "Computadora portátil", desc: "Computadora portátil básica", ubicacion: "Salón A1", responsable: "Marco Felix", imagen: "https://dodo.ac/np/images/5/5d/Laptop_%28Black_-_Desktop%29_NH_Icon.png"},
    {id: 202, serie: 620, numInv: 30, tipo: "Silla", desc: "Silla cómoda con respaldo", ubicacion: "Salón B1", responsable: "Miguel Arándano", imagen: "https://soopool.art/img/infoacnl/item/int_scx_chairS.png"},
    {id: 303, serie: 507, numInv: 30, tipo: "Escritorio", desc: "Mesa tipo escritorio para computadoras", ubicacion: "Salón B2", responsable: "Teresa Allende", imagen: "https://static.wikia.nocookie.net/animalcrossing/images/d/da/NH-Furniture-Ironwood_table.png/revision/latest/thumbnail/width/360/height/360?cb=20200420051333"},
    {id: 404, serie: 130, numInv: 2, tipo: "Pizarrón", desc: "Pizarrón grande color blanco", ubicacion: "Salón A2", responsable: "Teresa Allende", imagen: "https://png.pngtree.com/png-clipart/20211024/original/pngtree-whiteboard-with-stand-png-image_6865062.png"},
]

/**
 * El constructor de la clase Activo
 */
class Activo {
    constructor(id, serie, numInv, tipo, desc, ubicacion, responsable, imagen) {
        this.id = id;
        this.serie = serie;
        this.numInv = numInv;
        this.tipo = tipo;
        this.desc = desc;
        this.ubicacion = ubicacion;
        this.responsable = responsable;
        this.imagen = imagen;
    }
}

/**
 * Función que permite encontrar todos los activos que se encuentran registrados
 * @returns el arreglo que contiene los activos registrados.
 */
let obtenerTodos = function () {
    return activos;
}

/**
 * Función que permite realizar una búsqueda en el arreglo de activos registrados para encontrar el activo solicitado por id
 * @param {*} id el id a buscar
 * @returns el activo solicitado
 */
let buscarPorId = function (id) {
    for (let i = 0; i < activos.length; i++) {
        if (id == activos[i].id) {
            const element = activos[i];
            return element;
        }
    }
}

/**
 * Función que permite realizar una búsqueda en el arreglo de activos registrados para encontrar el activo solicitado por número de serie
 * @param {*} numSerie número de serie a buscar
 * @returns el activo solicitado
 */
let buscarPorNumSerie = function (numSerie) {
    for (let i = 0; i < activos.length; i++) {
        if (numSerie == activos[i].serie) {
            const element = activos[i];
            return element;
        }
    }
}

/**
 * Función que permite agregar un nuevo activo al arreglo de activos
 * @param {*} activo el activo que se desea agregar
 */
let agregar = function (activo) {
    activos.push(activo)
}

/**
 * Función que permite actualizar la información del activo indicado
 * @param {*} id el id del activo que se quiere actualizar
 * @param {*} nuevoActivo el activo con el que se va a reemplazar
 */
let actualizar = function (id, nuevoActivo) {
    const i = activos.findIndex(activo => activo.id == id);
    activos[i] = nuevoActivo;
}

/**
 * Función que permite eliminar un activo a través de su id
 * @param {*} id el id del activo que se desea eliminar
 */
let eliminar = function (id) {
    activos = activos.filter(activo => activo.id !== id);
}

//Exportación de todos los métodos
exports.obtenerTodos = obtenerTodos;
exports.buscarPorId = buscarPorId;
exports.buscarPorNumSerie = buscarPorNumSerie;
exports.agregar = agregar;
exports.actualizar = actualizar;
exports.eliminar = eliminar;
exports.Activo = Activo;