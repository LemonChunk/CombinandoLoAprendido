import { menuEditarTarea, menuVerDetalles, menuPreguntarEditarTarea } from "./FuncionesMenu.js";
import * as ingreso from "./FuncionesIngreso.js";
import { mostrarDetallesTarea, mostrarTareasEncontradas } from "./FuncionesPantalla.js";
import { esNumero } from "./FuncionesControladoras.js";

export function procesoEditarTareaElegida(listaTareas, indiceTarealegida){
    const op=menuEditarTarea()
    actualizarFechaModificacion(op, indiceTarealegida, listaTareas);
    switch(op){
        case 1:
            listaTareas.getTareas()[indiceTarealegida].setTitulo(ingreso.ingresarTitulo());
            return procesoEditarTareaElegida(listaTareas, indiceTarealegida);
        case 2:
            listaTareas.getTareas()[indiceTarealegida].setDescripcion(ingreso.ingresarDescripcion());
            return procesoEditarTareaElegida(listaTareas, indiceTarealegida);
        case 3:
            listaTareas.getTareas()[indiceTarealegida].setEstado(ingreso.ingresarEstado());
            return procesoEditarTareaElegida(listaTareas, indiceTarealegida);
        case 4:
            listaTareas.getTareas()[indiceTarealegida].setDificultad(ingreso.ingresarDificultad());
            return procesoEditarTareaElegida(listaTareas, indiceTarealegida);
        case 5:
            listaTareas.getTareas()[indiceTarealegida].setVencimiento(ingreso.ingresarVencimiento());
            return procesoEditarTareaElegida(listaTareas, indiceTarealegida);
        case 6:
            return listaTareas;
    }
}

export function actualizarFechaModificacion(op, indiceTareaElegida, listaTareas){
    switch(op){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            listaTareas.getTareas()[indiceTareaElegida].setUltimaModificacion(new Date());
            break;        
    }
}

export function procesoOrdenarTareas(lista){
    lista.sort((a, b) => {
        let tituloA = a.getTitulo().toLowerCase();
        let tituloB = b.getTitulo().toLowerCase();
        if (tituloA < tituloB) return -1;
        if (tituloA > tituloB) return 1;
        return 0;
    });
}

export function procesoVerTareas(arregloIndices, lista){
    mostrarTareasEncontradas(arregloIndices, lista.getTareas());
    const indiceTarealegida=menuVerDetalles(arregloIndices);
    if(esNumero(indiceTarealegida)){
        mostrarDetallesTarea(indiceTarealegida, lista);
        if(esNumero(menuPreguntarEditarTarea())){
            lista=procesoEditarTareaElegida(lista, indiceTarealegida);
        }
    }
}

export function procesoVerTareaPorEstado(lista, estado){
    const arregloIndices=lista.filtrarTareasPorEstado(estado);
    return procesoVerTareas(arregloIndices, lista);
}

export function procesoVerTareasPorBusqueda(lista, busqueda){
    const arregloIndices=lista.buscarTarea(busqueda);
    return procesoVerTareas(arregloIndices, lista);
}

