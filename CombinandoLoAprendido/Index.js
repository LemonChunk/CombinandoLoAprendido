import { ingresarPorTeclado } from "./FuncionesIngreso.js";
import { menuPrincipal } from "./FuncionesMenu.js";
import { opcionPrincipal1, opcionPrincipal2, opcionPrincipal3 } from "./FuncionesPrincipales.js";
import { listaTareas } from "./ListaTareas.js";
const lista = new listaTareas(); //Declara xd como una nueva listaTareas(el array de tareas)
let op;

do{
    menuPrincipal(); //Muestra el menu principal de opciones
    op=ingresarPorTeclado();
    switch(op){
        case "1":
            opcionPrincipal1(lista); //Se ejecuta la primera opción
            break;
        case "2":
            opcionPrincipal2(lista); //Se ejecuta la segunda opción
            break;
        case "3":
            opcionPrincipal3(lista); //Se ejecuta la tercera opción
            break;
    }
}while(op!=4);
