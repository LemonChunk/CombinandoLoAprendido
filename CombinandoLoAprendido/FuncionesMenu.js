import { comprobarOpcionMenuEditarTarea, comprobarOpcionMenuVerDetalles, comprobarOpcionMenuPreguntarEditarTarea } from "./FuncionesControladoras.js";
import { mostrarEnPantalla } from "./FuncionesPantalla.js";
export function menuPrincipal(){
    mostrarEnPantalla("Menú de opciones");
    mostrarEnPantalla("[1] Agregar tarea.");
    mostrarEnPantalla("[2] Ver tarea.");
    mostrarEnPantalla("[3] Buscar tarea.");
}
export function menuVerMisTareas(){
    mostrarEnPantalla("¿Qué tareas deseas ver?");
    mostrarEnPantalla("[1] Todas.");
    mostrarEnPantalla("[2] Pendientes.");
    mostrarEnPantalla("[3] En curso.");
    mostrarEnPantalla("[4] Terminadas.");
    mostrarEnPantalla("[0] Volver.");
}
export function menuBuscarTarea(){
    mostrarEnPantalla("Introduce el titulo de la tarea a buscar.");
}

export function menuAgregarUnaTarea(){
    mostrarEnPantalla("Estás creando una nueva tarea.");
    mostrarEnPantalla(`[1] Ingresar título`);
    mostrarEnPantalla(`[2] Ingresar descripción`);
    mostrarEnPantalla(`[3] Ingresar dificultad`);
    mostrarEnPantalla(`[4] Ingresar Vencimiento`);
    mostrarEnPantalla("[5] Finalizar la creacíon de la tarea.");
    mostrarEnPantalla("[0] Cancelar Creación de tarea.");
}
export function menuVerDetalles(arrayTareas){
    if(arrayTareas.length>0){
        mostrarEnPantalla("¿Deseas ver los detalles de alguna?");
        mostrarEnPantalla("Introduce el número para verla o 0 para volver");
        const eleccion=comprobarOpcionMenuVerDetalles(arrayTareas);
        switch(eleccion){
            case null:
                mostrarEnPantalla("Volviendo al menú  anterior.")
                return NaN;
            default:
                return parseInt(eleccion-1);
        }
    }
    else{
        mostrarEnPantalla("No hay tareas con el estado elegido.");
        return NaN;
    }
}
export function menuPreguntarEditarTarea(){
    mostrarEnPantalla("¿Deseas editar la tarea elegida?");
    mostrarEnPantalla("[1] Si");
    mostrarEnPantalla("[2] No");
    const eleccion=comprobarOpcionMenuPreguntarEditarTarea();
    switch(eleccion){
        case "1":
            return 1;
        default:
            return NaN;
    }
}
export function menuEditarTarea(){
    mostrarEnPantalla("Estás editando la tarea");
    mostrarEnPantalla("[1] Editar título.");
    mostrarEnPantalla("[2] Editar descripción.");
    mostrarEnPantalla("[3] Editar estado.");
    mostrarEnPantalla("[4] Editar dificultad.");
    mostrarEnPantalla("[5] Editar vencimiento.");
    mostrarEnPantalla("[6] Finalizar edición.");
    const eleccion=comprobarOpcionMenuEditarTarea();
    return eleccion;
}