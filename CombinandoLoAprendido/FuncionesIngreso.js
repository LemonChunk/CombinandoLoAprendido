import { mostrarEnPantalla, mostrarIngresoInvalido } from "./FuncionesPantalla.js";
import { comprobarDificultad, comprobarEstado} from "./FuncionesControladoras.js";
import promptSync from "prompt-sync";
export function ingresarPorTeclado(){
    const teclado = promptSync();
    return teclado(">");
}
export function ingresarTitulo(){
    mostrarEnPantalla("Ingrese un titulo para la tarea.");
    const titulo = ingresarPorTeclado();
    return titulo;
}
export function ingresarDescripcion(){
    mostrarEnPantalla("Ingrese una descripción para la tarea.");
    const descripcion = ingresarPorTeclado();
    return descripcion;
}
export function ingresarDificultad(){
    mostrarEnPantalla("Ingrese una dificultad para la tarea(1, 2, o 3)");
    const dificultad =Number(ingresarPorTeclado());
    if(comprobarDificultad(dificultad)){
        mostrarIngresoInvalido();
        return ingresarDificultad();
    }
    return dificultad;
}
export function ingresarVencimiento(){
    mostrarEnPantalla("Ingrese la fecha de vencimiento (dd/mm/yyyy): ");
    const entrada = ingresarPorTeclado();
    // Intentar convertir la entrada en una fecha válida
    const [dia, mes, anio] = entrada.split('/').map(Number); // Convertir a números
    const fechaVencimiento = new Date(anio, mes - 1, dia); // Mes empieza en 0 (Enero)
    // Validar que la fecha sea válida y no anterior a hoy
    if (!isNaN(Number(fechaVencimiento)) && fechaVencimiento >= new Date()){// No permitir fechas anteriores 
        return fechaVencimiento;
    } else {
        //aplicar recursividad para solicitar la fecha nuevamente
        mostrarIngresoInvalido();
        return ingresarVencimiento();
    }  
}
export function ingresarEstado(){
    mostrarEnPantalla("Ingrese un estado a la tarea: \n(P)endiente\n(E)n curso\n(T)erminada\n(C)ancelada");
    const entrada= ingresarPorTeclado();
    if(comprobarEstado(entrada)){
        return ingresarEstado();
    }
    return entrada;
}