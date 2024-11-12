export class Tarea{
    #titulo;
    #descripcion;
    #estado;
    #creacion;
    #ultimaModificacion;
    #vencimiento;
    #dificultad;
constructor(
    titulo="Sin titulo",                     
    descripcion="Sin descripción",
    estado="Pendiente",
    creacion=new Date(),
    ultimaModificacion=creacion,
    vencimiento="Sin fecha de vencimiento",
    dificultad=1
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
getTitulo() {
    return this.#titulo;
}
setTitulo(value) {
    this.#titulo=value;
}

getDescripcion() {
    return this.#descripcion;
}
setDescripcion(value) {
    this.#descripcion = value;
}

getEstado() {
    return this.#estado;
}
setEstado(value) {
    this.#estado=value;
}

getCreacion() {
    return this.#creacion;
}
// La fecha de creación no debería modificarse, por lo tanto no hay setter para ella.

getUltimaModificacion() {
    return this.#ultimaModificacion;
}
setUltimaModificacion(value) {
    this.#ultimaModificacion = value;
}

getVencimiento() {
    return this.#vencimiento;
}
setVencimiento(value) {
    this.#vencimiento = value;
}

getDificultad() {
    return this.#dificultad;
}
setDificultad(value) {
    this.#dificultad=value;
}
}