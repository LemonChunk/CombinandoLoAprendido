import { menuEditarTarea, menuVerDetalles, menuPreguntarEditarTarea, menuVerMisTareas } from "./FuncionesMenu.js";
import * as ingreso from "./FuncionesIngreso.js";
import { mostrarDetallesTarea, mostrarTareasEncontradas, mostrarEnPantalla, mostrarIngresoInvalido } from "./FuncionesPantalla.js";
import { esNumero, comprobarOpcionMenuVerTareas } from "./FuncionesControladoras.js";

export function procesoEditarTareaElegida(listaTareas, indiceTarealegida){ //Función que permite editar una tarea previamente elegida
    const op=menuEditarTarea()
    actualizarFechaModificacion(op, indiceTarealegida, listaTareas); //Actualiza la fecha modificación 
    switch(op){
        case 1:
            listaTareas.getTareas()[indiceTarealegida].setTitulo(ingreso.ingresarTitulo()); //El usuario ingresa el nuevo título para la tarea y se setea
            return procesoEditarTareaElegida(listaTareas, indiceTarealegida); //Recursividad con los datos actualizados
        case 2:
            listaTareas.getTareas()[indiceTarealegida].setDescripcion(ingreso.ingresarDescripcion()); //El usuario ingresa la nueva descripción para la tarea y se setea
            return procesoEditarTareaElegida(listaTareas, indiceTarealegida); //Recursividad con los datos actualizados
        case 3:
            listaTareas.getTareas()[indiceTarealegida].setEstado(ingreso.ingresarEstado()); //El usuario ingresa el nuevo estado para la tarea y se setea
            return procesoEditarTareaElegida(listaTareas, indiceTarealegida); //Recursividad con los datos actualizados
        case 4:
            listaTareas.getTareas()[indiceTarealegida].setDificultad(ingreso.ingresarDificultad()); //El usuario ingresa la nueva dificultad para la tarea y se setea
            return procesoEditarTareaElegida(listaTareas, indiceTarealegida); //Recursividad con los datos actualizados
        case 5:
            listaTareas.getTareas()[indiceTarealegida].setVencimiento(ingreso.ingresarVencimiento()); //El usuario ingresa la nueva fecha de vencimiento para la tarea y se setea
            return procesoEditarTareaElegida(listaTareas, indiceTarealegida); //Recursividad con los datos actualizados
        case 6:
            return listaTareas; //Devuelve la lista de tareas actualizada
    }
}

export function actualizarFechaModificacion(op, indiceTareaElegida, listaTareas){ //Función que actualiza la fecha de modificación de la tarea cuando el usuario ingresa cualquier opción que permita modificar un atributo de la tarea
    switch(op){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            listaTareas.getTareas()[indiceTareaElegida].setUltimaModificacion(new Date()); //Cuando el usuario ingrese una opción (desde 1 hasta 5) se setea la fecha de modificación de la tarea a la fecha actual
            break;        
    }
}

export function procesoOrdenarTareas(lista){ //Función que ordena por título las tareas dentro de la lista de tareas
    lista.sort((a, b) => { //Toma los elementos a y b para compararlos
        let tituloA = a.getTitulo().toLowerCase(); //Obtiene el título de a y lo convierte en minúsculas
        let tituloB = b.getTitulo().toLowerCase(); //Obtiene el título de b y lo convierte en minúsculas
        if (tituloA < tituloB) return -1; //Si el título de a es menor que el de b retorna -1
        if (tituloA > tituloB) return 1; //Si el título de b es menor que el de a retorna -1
        return 0; //Si ambos títulos son iguales retorna 0
    });
}

export function procesoVerTareas(arregloIndices, lista){ //Función que muestra las tareas filtradas y permite al usuario elegir una tarea por índice
    mostrarTareasEncontradas(arregloIndices, lista.getTareas()); //Muestra las tareas tareas por los índices filtrados según las tareas que quiera ver el usuario
    const indiceTarealegida=menuVerDetalles(arregloIndices); //Le pregunta al usuario si quiere ver los detalles de alguna tarea y el usuario ingresa una opción
    if(esNumero(indiceTarealegida)){ //Comprueba si el dato que ingresó el usuario es un número, en caso de serlo:
        mostrarDetallesTarea(indiceTarealegida, lista); //Le muestra los detalles de la tarea elegida al usuario
        if(esNumero(menuPreguntarEditarTarea())){ //Le pregunta al usuario si quiere editar la tarea elegida y le permite al usuario ingresar una opción, comprueba que el dato que ingresó sea un número
            lista=procesoEditarTareaElegida(lista, indiceTarealegida); //Si es número, es decir que el usuario eligió editar la tarea, empieza el proceso de editar la tarea
        }
    }
}

export function procesoVerTareaPorEstado(lista, estado){ //Función que filtra las tareas por la opcion que ingresó el usuario
    const arregloIndices=lista.filtrarTareasPorEstado(estado); //Declara un arreglo de índices que sus elementos van a ser los índices de las tareas filtradas según el estado que seleccionó el usuario, por ej. si el usuario seleccionó ver tareas terminadas, el array tendrá los índices de todas las tareas terminadas del array de tareas
    return procesoVerTareas(arregloIndices, lista); //Le muestra al usuario las tareas filtradas y sus respectivas opciones
}

export function procesoVerTareasPorBusqueda(lista, busqueda){ //Función que filtra las tareas por el string de búsqueda que ingresó el usuario
    const arregloIndices=lista.buscarTarea(busqueda); //Declara un arreglo de índices que sus elementos van a ser los índices de las tareas filtradas según su coincidencia con el string de búsqueda que ingresó el usuario
    return procesoVerTareas(arregloIndices, lista); //Le muestra al usuario las tareas filtradas y sus respectivas opciones
}

export function gestionarMenuVerTareas(lista){ //Función que nos le permite ver las tareas creadas al usuario
    menuVerMisTareas(); //Muestra el menú con sus opciones
    const op = comprobarOpcionMenuVerTareas(ingreso.ingresarPorTeclado()); //El usuario ingresa un valor y comprueba el valor y se le asigna a op
    if(op==="Salir"){ //Si el usuario elegió salir
        mostrarEnPantalla("Volviendo al menú anterior.");
        return;
    }
    if(op!==null){ //Si el usuario eligió ver tareas
        procesoVerTareaPorEstado(lista, op); //Empieza el proceso de ver tareas
    } else { //Si el valor que ingresó el usuario esta fuera de los valores válidos
        mostrarIngresoInvalido(); //Muestra un cartel de error
    }
    return gestionarMenuVerTareas(lista); //Recursividad
}