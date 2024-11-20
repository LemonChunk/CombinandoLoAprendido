import { ingresarPorTeclado } from "./FuncionesIngreso.js";
import {mostrarIngresoInvalido } from "./FuncionesPantalla.js";

/*COMPROBAR TÍTULO*/
export function comprobarTitulo(titulo){ //Función que comprueba si la tarea tiene título, en caso de no tener devuelve true
    return (titulo=="Sin titulo" || titulo=="");
}

/*COMPROBAR DIFICULTAD*/
export function comprobarDificultad(dificultad){ //Función que comprueba que el usuario ingresó una dificultad válida, en caso de no ingresar una dificultad válida retorna true
    return ((isNaN(dificultad)) || (dificultad!=1 && dificultad!=2 && dificultad!=3));
}


export function estaIndice(array, index){
    return array.some(indice => indice === index); //Comprueba si existe un índice en el array que sea igual al index
}

/*COMPROBAR OPCIÓN del MENÚ VER TAREAS*/
export function comprobarOpcionMenuVerTareas(op){ //Función que comprueba si el valor que ingresó el usuario esté dentro de las opciones
    const opciones = { //Declara el objeto opciones
        "0": "Salir",
        "1": "Todas",
        "2": "Pendiente",
        "3": "En curso",
        "4": "Terminada"
    }
    if(op in opciones){ //Si el valor de op ingresado por el usuario está dentro de los valores de opciones
        return opciones[op]; //Retorna la opción ingresada
    } else {
        return null; //Si no está dentro, retorna NULL
    }
}

/*COMPROBAR OPCIÓN del MENÚ VER DETALLES*/
export function comprobarOpcionMenuVerDetalles(arrayTareas){ //Función que permite que el usuario ingrese un valor y comprueba que esté dentro de los valores válidos
    const eleccionUsuario=parseInt(ingresarPorTeclado());
    if(!esNumero(eleccionUsuario)){ //Si el dato que ingresó el usuario es diferente a un número
        mostrarIngresoInvalido(); //Muestra un cartel de error
        return comprobarOpcionMenuVerDetalles(); //Recursividad
    }
    else{ 
        if (eleccionUsuario===0) { //Si el dato que ingresó el usuario es 0
            return null; //si no tiene ganas de ver los detalles de alguna tarea
        }
        else{ //Si el dato que ingresó el usuario es un número y es diferente de 0
            if(!estaIndice(arrayTareas, eleccionUsuario-1)){  //Comprueba si el dato del usuario-1 es un índice que esté dentro del array, en caso de que no esté dentro:
                mostrarIngresoInvalido(); //Muestra un cartel de error
                return comprobarOpcionMenuVerDetalles(); //Recursividad
            }
            else {
                return eleccionUsuario; //devuelve el indice de la tarea elegida + 1, ej [2] Buscar materiales, es la tarea con titulo buscar materiales en el indice 1 del arreglo de tareas
            }
        }
    }
}

/*COMPROBAR OPCIÓN del MENÚ PREGUNTAR EDITAR TAREA*/
export function comprobarOpcionMenuPreguntarEditarTarea(){ //Función que permite al usuario que ingrese un valor y comprueba que esté dentro de las opciones válidas
    const eleccionUsuario=ingresarPorTeclado();
    if(eleccionUsuario!="1" && eleccionUsuario!="2"){ //Comprueba que el valor que ingresó el usuario sea diferente de 1 o 2, en caso de serlo:
        mostrarIngresoInvalido(); //Muestra un cartel de error
        return comprobarOpcionMenuPreguntarEditarTarea(); //Recursividad
    }
    return eleccionUsuario; //Si el valor que ingresó el usuario es 1 o 2, lo retorna
}

/*COMPROBAR OPCIÓN del MENU EDITAR TAREA*/
export function comprobarOpcionMenuEditarTarea(){ //Función que permite al usuario ingresar un valor y comprobar que esté dentro de los valores válidos
    const eleccionUsuario=parseInt(ingresarPorTeclado()); //Convierte el valor ingresado por el usuario en entero
    if((eleccionUsuario<1 | eleccionUsuario>6) | isNaN(eleccionUsuario)){ //Comprueba si el valor no está entre 1 y 6 o si el valor no es un número, en caso de que esto sea true:
        mostrarIngresoInvalido(); //Muestra cartel de error
        return comprobarOpcionMenuEditarTarea(); //Recursividad
    }
    return eleccionUsuario; //Retorna el valor válido
}


export function emojizarDificultad(dificultad){ //Función que devuelve un string con emojis dependiendo de la dificultad de la tarea
    switch(dificultad){
        case 1:
            return "⭐";
        case 2:
            return "⭐⭐";
        case 3:
            return "⭐⭐⭐";
    }
}


export function esNumero(numero){ //Función que devuelve true si el dato es un número
    return !isNaN(numero);
}

/*COMPROBAR ESTADO*/
export function comprobarEstado(estado){ //Función que comprueba si el valor que ingresó el usuario está dentro de los valores de estados
    const estados = { //Declara el objeto estado con sus valores
        "P" : "Pendiente",
        "E" : "En curso",
        "T" : "Terminada",
        "C" : "Cancelada"
    }

    if(estado in estados){ //Si el valor que ingresó el usuario está dentro de estados
        return estados[estado]; //Devuelve el estado
    } else {
        return null; //Si ingresó un valor que no está en estados
    }
}


export function convertirFormatoDeFecha(fecha){
    //fecha.getDate(): Obtiene el día del mes (número) de la fecha. Por ejemplo, si la fecha es 2024-11-11, 
    //este método devolvería 11.
    const dia = fecha.getDate().toString().padStart(2, '0');
    //fecha.getMonth(): Obtiene el mes de la fecha como un número entre 0 y 11, donde 0 representa enero y
    // 11 diciembre. Para corregirlo y que los meses sean de 1 a 12, se le suma 1 después de aplicar el método
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    //fecha.getFullYear(): Obtiene el año completo de la fecha como un número de cuatro dígitos.
    const año = fecha.getFullYear();
    //toString() convierte el valor numérico (día, mes o año) a una cadena de texto.
    //.padStart(2, '0') se aplica a strings y asegura que tengan una longitud mínima especificada.
    // Si la cadena es más corta que la longitud deseada, rellena con el carácter especificado al inicio.
    return `${dia}/${mes}/${año}`;
}

/*COMPROBAR FECHA de VENCIMIENTO*/
export function comprobarFechaVencimientoParaMostrar(fecha){ //Comprueba si la tarea tiene fecha de vencimiento
    if(fecha==="Sin fecha de vencimiento"){ //En caso de no tener solo devuelve el string para mostrarlo
        return fecha;
    }
    return convertirFormatoDeFecha(fecha); //Si tiene fecha la convierte en un formato mas legible para mostrarla
}
