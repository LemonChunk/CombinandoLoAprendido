import * as ingreso from "./FuncionesIngreso.js";
import { Tarea } from "./Tarea.js";
import { comprobarTitulo, comprobarOpcionMenuVerTareas } from "./FuncionesControladoras.js";
import { mostrarEnPantalla, mostrarIngresoInvalido } from "./FuncionesPantalla.js";
import * as menu from "./FuncionesMenu.js";
import { procesoOrdenarTareas, procesoVerTareaPorEstado, procesoVerTareasPorBusqueda} from "./FuncionesGestoras.js";

/*PROCESO DE AGREGAR TAREA */
export function opcionPrincipal1(lista){
    let op;
    const nuevaTarea = new Tarea();
    do{
        menu.menuAgregarUnaTarea();
        op=ingreso.ingresarPorTeclado();
        switch(op){
            case "1":
                nuevaTarea.setTitulo(ingreso.ingresarTitulo());
                break;
            case "2":
                nuevaTarea.setDescripcion(ingreso.ingresarDescripcion());
                break;
            case "3":
                nuevaTarea.setDificultad(ingreso.ingresarDificultad());
                break;
            case "4":
                nuevaTarea.setVencimiento(ingreso.ingresarVencimiento());
                break;
            case "5":
                if(comprobarTitulo(nuevaTarea.getTitulo().trim())){
                    mostrarEnPantalla("No puedes agregar una tarea sin modificar el titulo.");
                    op="-1";
                }
                else{
                    mostrarEnPantalla("Se agregó la tarea exitosamente.");
                    lista.aniadirTarea(nuevaTarea);
                    procesoOrdenarTareas(lista.getTareas());
                }
                break;
            case "0":
                mostrarEnPantalla("La creación de la tarea se canceló exitosamente.");
                break;
            default:
                mostrarIngresoInvalido();
                break;
        }
    }while(op!="0" && op!="5");
}

/*PROCESO VER TAREAS */
export function opcionPrincipal2(lista){
    if(lista.esVacia()){
        mostrarEnPantalla("La lista está vacía.");
    }
    else{
        gestionarMenuVerTareas(lista);
    }
}

/*modularizacion de ver tareas, que alguien ponga esto en algun otro archivo, donde sea que vaya xd*/
export function gestionarMenuVerTareas(lista){
    menu.menuVerMisTareas();
    const op = comprobarOpcionMenuVerTareas(ingreso.ingresarPorTeclado());
    if(op==="Salir"){
        mostrarEnPantalla("Volviendo al menú anterior.");
        return;
    }
    if(op!==null){
        procesoVerTareaPorEstado(lista, op);
    } else {
        mostrarIngresoInvalido();
    }
    return gestionarMenuVerTareas(lista);
}

/*PROCESO BUSCAR TAREAS*/

export function opcionPrincipal3(lista){
    if(lista.esVacia()){
        mostrarEnPantalla("La lista está vacía.");
    } else {
        menu.menuBuscarTarea();
        let busqueda = ingreso.ingresarPorTeclado();
        procesoVerTareasPorBusqueda(lista, busqueda);
    }
}