import * as ingreso from "./FuncionesIngreso.js";
import { Tarea } from "./Tarea.js";
import { comprobarTitulo } from "./FuncionesControladoras.js";
import { mostrarEnPantalla, mostrarIngresoInvalido } from "./FuncionesPantalla.js";
import * as menu from "./FuncionesMenu.js";
import { procesoOrdenarTareas, procesoVerTarea } from "./FuncionesGestoras.js";

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
        let op;
        do{
            menu.menuVerMisTareas();
            op=ingreso.ingresarPorTeclado();
            switch(op){
                case "1":
                    procesoVerTarea(lista, "Todas");
                    break;
                case "2":
                    procesoVerTarea(lista, "Pendiente");
                    break;
                case "3":
                    procesoVerTarea(lista, "En curso");
                    break;
                case "4":
                    procesoVerTarea(lista, "Terminada");
                    break;
                case "0":
                    mostrarEnPantalla("Volviendo al menú anterior.");
                    break;
                default:
                    mostrarIngresoInvalido();
                    break;
            }
        }while(op!="0");
    }
}