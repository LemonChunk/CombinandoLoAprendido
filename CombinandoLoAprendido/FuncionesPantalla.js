import { emojizarDificultad, convertirFormatoDeFecha, comprobarFechaVencimientoParaMostrar } from "./FuncionesControladoras.js";
export function mostrarEnPantalla (cadena){
    return console.log(`${cadena}`);
}
export function mostrarIngresoInvalido (){
    mostrarEnPantalla("Opción ingresada no válida.");
}
export function mostrarTareasEncontradas(arrayindices, arrayTareas){
    arrayindices.forEach(indice => {
        mostrarEnPantalla(`[${arrayindices[indice]+ 1}] ${arrayTareas[indice].getTitulo()}`)
    });
}
export function mostrarDetallesTarea(indice, listaTareas){
    mostrarEnPantalla(`----------------------------------------------------------------------------`);
    mostrarEnPantalla(`DETALLES DE LA TAREA SELECCIONADA`);
    mostrarEnPantalla(`Titulo:    ${listaTareas.getTareas()[indice].getTitulo()}`);
    mostrarEnPantalla(`Descripcion:   ${listaTareas.getTareas()[indice].getDescripcion()}`);
    mostrarEnPantalla(`Estado:    ${listaTareas.getTareas()[indice].getEstado()}`);
    mostrarEnPantalla(`Dificultad:    ${emojizarDificultad(listaTareas.getTareas()[indice].getDificultad())}\n`);
    mostrarEnPantalla(`Creación:   ${convertirFormatoDeFecha(listaTareas.getTareas()[indice].getCreacion())}`);
    mostrarEnPantalla(`Vencimiento: ${comprobarFechaVencimientoParaMostrar(listaTareas.getTareas()[indice].getVencimiento())}`);
    mostrarEnPantalla(`Última modificación:   ${convertirFormatoDeFecha(listaTareas.getTareas()[indice].getUltimaModificacion())}`);
    mostrarEnPantalla(`----------------------------------------------------------------------------`);
}