import { comprobarOpcionMenuEditarTarea, comprobarOpcionMenuVerDetalles, comprobarOpcionMenuPreguntarEditarTarea } from "./FuncionesControladoras.js";
import { mostrarEnPantalla } from "./FuncionesPantalla.js";
/*MENÚ PRINCIPAL*/
export function menuPrincipal(){ //Función que muestra el menú principal
    mostrarEnPantalla("Menú de opciones");
    mostrarEnPantalla("[1] Agregar tarea.");
    mostrarEnPantalla("[2] Ver tarea.");
    mostrarEnPantalla("[3] Buscar tarea.");
    mostrarEnPantalla("[4] Salir.");
}

/*MENÚ DE VER TAREAS*/
export function menuVerMisTareas(){ //Función que muestra el menú de ver tareas
    mostrarEnPantalla("¿Qué tareas deseas ver?");
    mostrarEnPantalla("[1] Todas.");
    mostrarEnPantalla("[2] Pendientes.");
    mostrarEnPantalla("[3] En curso.");
    mostrarEnPantalla("[4] Terminadas.");
    mostrarEnPantalla("[0] Volver.");
}

/*MENÚ DE BUSCAR TAREA*/
export function menuBuscarTarea(){ //Función que muestra el menú de buscar tarea
    mostrarEnPantalla("Introduce el titulo de la tarea a buscar.");
}

/*MENÚ DE AGREGAR TAREA*/
export function menuAgregarUnaTarea(){ //Función que muestra el menú cuando el usuario crea una nueva tarea
    mostrarEnPantalla("Estás creando una nueva tarea.");
    mostrarEnPantalla(`[1] Ingresar título`);
    mostrarEnPantalla(`[2] Ingresar descripción`);
    mostrarEnPantalla(`[3] Ingresar dificultad`);
    mostrarEnPantalla(`[4] Ingresar Vencimiento`);
    mostrarEnPantalla("[5] Finalizar la creacíon de la tarea.");
    mostrarEnPantalla("[0] Cancelar Creación de tarea.");
}
/*MENÚ DE VER DETALLES*/
export function menuVerDetalles(arrayTareas){ //Función que muestra las tareas y le permite al usuario ver los detalles de una tarea elegida
    if(arrayTareas.length>0){
        mostrarEnPantalla("¿Deseas ver los detalles de alguna?");
        mostrarEnPantalla("Introduce el número para verla o 0 para volver");
        const eleccion=comprobarOpcionMenuVerDetalles(arrayTareas); //Comprueba que la opción que ingrese el usuario sea válida
        switch(eleccion){
            case null: //El usuario no quiere ver detalles de ninguna tarea
                mostrarEnPantalla("Volviendo al menú  anterior.")
                return NaN; //Retorna NaN
            default:
                return parseInt(eleccion-1); //Devuelve el índice que ingresó el usuario -1 transformado en entero
        }
    }
    else{ //Si el usuario quiere ver tareas por un estado que no existe, por ej. el usuario quiere ver las tareas en curso y no hay ninguna tarea con el estado en curso
        mostrarEnPantalla("No hay tareas con el estado elegido.");
        return NaN; //Retorna NaN
    }
}

/*MENÚ DE PREGUNTAR EDITAR la TAREA*/
export function menuPreguntarEditarTarea(){ //Función que le pregunta al usuario si quiere editar una tarea previamente elegida
    mostrarEnPantalla("¿Deseas editar la tarea elegida?");
    mostrarEnPantalla("[1] Si");
    mostrarEnPantalla("[2] No");
    const eleccion=comprobarOpcionMenuPreguntarEditarTarea(); //Comprueba que el valor que ingresó el usuario esté dentro de las opciones
    switch(eleccion){
        case "1":
            return 1; //Si el usuario quiere editar la tarea retorna 1
        default:
            return NaN; //Si el usuario no quiere no retorna un número
    }
}

/*MENÚ DE EDITAR TAREA*/
export function menuEditarTarea(){ //Función que muestra el menú donde se edita la tarea y le permite ver al usuario las opciones para editar
    mostrarEnPantalla("Estás editando la tarea");
    mostrarEnPantalla("[1] Editar título.");
    mostrarEnPantalla("[2] Editar descripción.");
    mostrarEnPantalla("[3] Editar estado.");
    mostrarEnPantalla("[4] Editar dificultad.");
    mostrarEnPantalla("[5] Editar vencimiento.");
    mostrarEnPantalla("[6] Finalizar edición.");
    const eleccion=comprobarOpcionMenuEditarTarea(); //Comprueba que el valor que ingresó el usuario esté dentro de las opciones
    return eleccion; //Retorna el valor que ingresó el usuario
}