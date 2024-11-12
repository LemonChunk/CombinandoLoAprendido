import { menuEditarTarea, menuVerDetalles, menuPreguntarEditarTarea } from "./FuncionesMenu.js";
import * as ingreso from "./FuncionesIngreso.js";
import { mostrarDetallesTarea, mostrarTareasEncontradas } from "./FuncionesPantalla.js";
import { esNumero } from "./FuncionesControladoras.js";
export function procesoEditarTareaElegida(listaTareas, indiceTarealegida){
    const op=menuEditarTarea()
    switch(op){
        case 1:
            listaTareas.getTareas()[indiceTarealegida].setTitulo(ingreso.ingresarTitulo());
            return editarTareaElegida(listaTareas, indiceTarealegida);
        case 2:
            listaTareas.getTareas()[indiceTarealegida].setDescripcion(ingreso.ingresarDescripcion());
            return editarTareaElegida(listaTareas, indiceTarealegida);
        case 3:
            listaTareas.getTareas()[indiceTarealegida].setEstado(ingreso.ingresarEstado());
            return editarTareaElegida(listaTareas, indiceTarealegida);
        case 4:
            listaTareas.getTareas()[indiceTarealegida].setDificultad(ingreso.ingresarDificultad());
            return editarTareaElegida(listaTareas, indiceTarealegida);
        case 5:
            listaTareas.getTareas()[indiceTarealegida].setVencimiento(ingreso.ingresarVencimiento());
            return editarTareaElegida(listaTareas, indiceTarealegida);
        case 6:
            listaTareas.getTareas()[indiceTarealegida].setUltimaModificacion(new Date());
            return listaTareas;
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
export function procesoVerTarea(lista, estado){
    const arregloIndices=lista.filtrarTareasPorEstado(estado)
    mostrarTareasEncontradas(arregloIndices, lista.getTareas());
    const indiceTarealegida=menuVerDetalles(arregloIndices);
    if(esNumero(indiceTarealegida)){
        mostrarDetallesTarea(indiceTarealegida, lista);
        if(esNumero(menuPreguntarEditarTarea())){
            lista=procesoEditarTareaElegida(lista, indiceTarealegida);
        }
    }
}