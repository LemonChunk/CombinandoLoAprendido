import { mostrarEnPantalla, mostrarIngresoInvalido } from "./FuncionesPantalla.js";
import { comprobarDificultad, comprobarEstado} from "./FuncionesControladoras.js";
import promptSync from "prompt-sync";
export function ingresarPorTeclado(){ //Función para ingresar valores por el teclado
    const teclado = promptSync();
    return teclado(">");
}
export function ingresarTitulo(){ //Función donde el usuario ingresa el título para una tarea
    mostrarEnPantalla("Ingrese un titulo para la tarea.");
    const titulo = ingresarPorTeclado();
    return titulo; //Retorna el título ingresado por el usuario
}
export function ingresarDescripcion(){ //Función donde el usuario ingresa la descripción para una tarea
    mostrarEnPantalla("Ingrese una descripción para la tarea.");
    const descripcion = ingresarPorTeclado();
    return descripcion; //Retorna la descripción ingresada por el usuario
}
export function ingresarDificultad(){ //Función donde el usuario ingresa la descripción para una tarea
    mostrarEnPantalla("Ingrese una dificultad para la tarea(1, 2, o 3)");
    const dificultad =Number(ingresarPorTeclado()); //El usuario ingresa un dato y se convierte en number
    if(comprobarDificultad(dificultad)){ //Comprueba el dato ingresado por el usuario, si es true:
        mostrarIngresoInvalido(); //Muestra un cartel de error
        return ingresarDificultad(); //Recursividad, para que el usuario vuelva a ingresar otro valor
    }
    return dificultad; //Retorna la dificultad ingresada por el usuario
}
export function ingresarVencimiento(){ //Función donde el usuario ingresa el vencimiento para una tarea
    mostrarEnPantalla("Ingrese la fecha de vencimiento (dd/mm/yyyy): ");
    const entrada = ingresarPorTeclado();
    // Intentar convertir la entrada en una fecha válida
    const [dia, mes, anio] = entrada.split('/').map(Number); // Convertir a números
    const fechaVencimiento = new Date(anio, mes - 1, dia); // Mes empieza en 0 (Enero)
    // Validar que la fecha sea válida y no anterior a hoy
    if (!isNaN(Number(fechaVencimiento)) && fechaVencimiento >= new Date()){// No permitir fechas anteriores 
        return fechaVencimiento; //Retorna la fecha de vencimiento ingresada por el usuario
    } else {
        //aplicar recursividad para solicitar la fecha nuevamente
        mostrarIngresoInvalido();
        return ingresarVencimiento(); //Retorna la fecha de vencimiento ingresada por el usuario
    }  
}
export function ingresarEstado(){ //Función donde el usuario ingresa el estado para una tarea
    mostrarEnPantalla("Ingrese un estado a la tarea: \n(P)endiente\n(E)n curso\n(T)erminada\n(C)ancelada");
    const estado = comprobarEstado(ingresarPorTeclado()); //El usuario ingresa un valor y se comprueba
    if(estado===null){ //Si es null, es decir, si el usuario ingresó un valor no válido:
        mostrarIngresoInvalido(); //Muestra un cartel de error
        return ingresarEstado(); //Recursividad
    }
    return estado; //Retorna el estado ingresado por el usuario
}