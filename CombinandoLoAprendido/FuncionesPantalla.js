import { emojizarDificultad, convertirFormatoDeFecha, comprobarFechaVencimientoParaMostrar } from "./FuncionesControladoras.js";
export function mostrarEnPantalla (cadena){
    return console.log(`${cadena}`);
}
export function mostrarIngresoInvalido (){ //Función que muestra un cartel de error cuando el usuario ingresa un valor no válido
    mostrarEnPantalla("Opción ingresada no válida.");
}
export function mostrarTareasEncontradas(arrayindices, arrayTareas){ //Función que muestra los títulos de las tareas según los índices que estén guardados en el array de índices, estas tareas se muestran juntos con sus índices +1
    arrayindices.forEach(indice => { //Por cada índice del array de índice
        mostrarEnPantalla(`[${arrayindices[indice]+ 1}] ${arrayTareas[indice].getTitulo()}`) //Muestra el índice+1 junto con la tarea que le corresponde a ese índice, por ej. si Limpiar es la tarea[2] se mostrará con el índice [3]
    });
}
export function mostrarDetallesTarea(indice, listaTareas){ //Función que muestra los detalles de una tarea elegida
    mostrarEnPantalla(`----------------------------------------------------------------------------`);
    mostrarEnPantalla(`DETALLES DE LA TAREA SELECCIONADA`);
    mostrarEnPantalla(`Titulo:    ${listaTareas.getTareas()[indice].getTitulo()}`); //Muestra el título de la tarea
    mostrarEnPantalla(`Descripcion:   ${listaTareas.getTareas()[indice].getDescripcion()}`); //Muestra la descripción de la tarea
    mostrarEnPantalla(`Estado:    ${listaTareas.getTareas()[indice].getEstado()}`); //Muestra el estado de la tarea
    mostrarEnPantalla(`Dificultad:    ${emojizarDificultad(listaTareas.getTareas()[indice].getDificultad())}\n`); //Muestra la dificultad de la tarea representada con un string con emojis
    mostrarEnPantalla(`Creación:   ${convertirFormatoDeFecha(listaTareas.getTareas()[indice].getCreacion())}`); //Muestra la fecha de creación de la tarea con un formato más legible
    mostrarEnPantalla(`Vencimiento: ${comprobarFechaVencimientoParaMostrar(listaTareas.getTareas()[indice].getVencimiento())}`); //Muestra la fecha de vencimiento de la tarea
    mostrarEnPantalla(`Última modificación:   ${convertirFormatoDeFecha(listaTareas.getTareas()[indice].getUltimaModificacion())}`);  //Muestra la fecha de modificación de la tarea con un formato más legible
    mostrarEnPantalla(`----------------------------------------------------------------------------`);
}