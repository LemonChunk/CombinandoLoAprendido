import { ingresarPorTeclado } from "./FuncionesIngreso.js";
import {mostrarIngresoInvalido } from "./FuncionesPantalla.js";
export function comprobarTitulo(titulo){
    return (titulo=="Sin titulo" || titulo=="");
}
export function comprobarDificultad(dificultad){
    return ((isNaN(dificultad)) || (dificultad!=1 && dificultad!=2 && dificultad!=3));
}
export function estaIndice(array, index){
    return array.some(indice => indice === index);
}
export function comprobarOpcionMenuVerDetalles(arrayTareas){
    const eleccionUsuario=parseInt(ingresarPorTeclado());
    if(!esNumero(eleccionUsuario)){
        mostrarIngresoInvalido();
        return comprobarOpcionMenuVerDetalles();
    }
    else{ 
        if (eleccionUsuario===0) {
            return null; //si no tiene ganas de ver los detalles de alguna tarea
        }
        else{
            if(!estaIndice(arrayTareas, eleccionUsuario-1)){
                mostrarIngresoInvalido();
                return comprobarOpcionMenuVerDetalles();
            }
            else {
                return eleccionUsuario; //devuelve el indice de la tarea elegida + 1, ej [2] Buscar materiales, es la tarea con titulo buscar materiales en el indice 1 del arreglo de tareas
            }
        }
    }
}
export function comprobarOpcionMenuPreguntarEditarTarea(){
    const eleccionUsuario=ingresarPorTeclado();
    if(eleccionUsuario!="1" && eleccionUsuario!="2"){
        mostrarIngresoInvalido();
        return comprobarOpcionMenuPreguntarEditarTarea();
    }
    return eleccionUsuario;
}
export function comprobarOpcionMenuEditarTarea(){
    const eleccionUsuario=parseInt(ingresarPorTeclado());
    if((eleccionUsuario<1 | eleccionUsuario>6) | isNaN(eleccionUsuario)){
        mostrarIngresoInvalido();
        return comprobarOpcionMenuEditarTarea();
    }
    return eleccionUsuario;
}
export function emojizarDificultad(dificultad){
    switch(dificultad){
        case 1:
            return "⭐";
        case 2:
            return "⭐⭐";
        case 3:
            return "⭐⭐⭐";
    }
}
export function esNumero(numero){
    return !isNaN(numero);
}
export function comprobarEstado(estado){
    return (estado.toUpperCase()!=="P" && estado.toUpperCase()!=="E" && 
    estado.toUpperCase()!=="T" && estado.toUpperCase()!=="C");
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
export function comprobarFechaVencimientoParaMostrar(fecha){
    if(fecha==="Sin fecha de vencimiento"){
        return fecha;
    }
    return convertirFormatoDeFecha(fecha);
}
