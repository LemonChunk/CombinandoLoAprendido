export class Tarea{
    // Se declaran los atributos de Tarea como privados
    #titulo;
    #descripcion;
    #estado;
    #creacion;
    #ultimaModificacion;
    #vencimiento;
    #dificultad;
constructor( //Constructor de la clase Tarea
    titulo="Sin titulo", //Se le asigna un string predeterminado para el título                     
    descripcion="Sin descripción", //Se le asigna un string predeterminado para la descripción
    estado="Pendiente", //Se le asigna un string predeterminado para el estado
    creacion=new Date(), //Se le asigna la fecha actual para la creación
    ultimaModificacion=creacion, //Se le asigna la fecha de creación para la fecha de modificación, ya que cuando se crea se modifican atributos
    vencimiento="Sin fecha de vencimiento", //Se le asigna un string predeterminado para la fecha de vencimiento
    dificultad=1 //Se le asigna la dificultad más baja de forma predeterminada
)
{
    this.#titulo=titulo;
    this.#descripcion=descripcion;
    this.#estado=estado;
    this.#creacion=creacion;
    this.#ultimaModificacion=ultimaModificacion;
    this.#vencimiento=vencimiento;
    this.#dificultad=dificultad;
}
getTitulo() { //Método que devuelve el título de la tarea
    return this.#titulo;
}

setTitulo(value) { //Método que setea (guarda) el título de la tarea
    this.#titulo=value;
}

getDescripcion() { //Método que devuelve la descripción de la tarea
    return this.#descripcion;
}
setDescripcion(value) { //Método que setea (guarda) la descripción de la tarea
    this.#descripcion = value;
}

getEstado() { //Método que devuelve el estado de la tarea
    return this.#estado;
}
setEstado(value) { //Método que setea (guarda) el estado de la tarea
    this.#estado=value;
}

getCreacion() { //Método que devuelve la fecha de creación de la tarea
    return this.#creacion;
}
// La fecha de creación no debería modificarse, por lo tanto no hay setter para ella.

getUltimaModificacion() { //Método que devuelve la última modificación de la tarea
    return this.#ultimaModificacion;
}
setUltimaModificacion(value) { //Método que setea (guarda) la última modificación de la tarea
    this.#ultimaModificacion = value;
}

getVencimiento() { //Método que devuelve la fecha de fecha de vencimiento de la tarea
    return this.#vencimiento;
}
setVencimiento(value) { //Método que setea (guarda) la fecha de vencimiento de la tarea
    this.#vencimiento = value;
}

getDificultad() { //Método que devuelve la dificultad de la tarea
    return this.#dificultad;
}
setDificultad(value) { //Método que setea (guarda) la dificultad de la tarea
    this.#dificultad=value;
}
}