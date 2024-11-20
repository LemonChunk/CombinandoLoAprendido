import * as ingreso from "./FuncionesIngreso.js";
import { Tarea } from "./Tarea.js";
import { comprobarTitulo} from "./FuncionesControladoras.js";
import { mostrarEnPantalla, mostrarIngresoInvalido } from "./FuncionesPantalla.js";
import * as menu from "./FuncionesMenu.js";
import { procesoOrdenarTareas, procesoVerTareaPorEstado, procesoVerTareasPorBusqueda, gestionarMenuVerTareas} from "./FuncionesGestoras.js";

/*OPCIÓN de AGREGAR TAREA */
export function opcionPrincipal1(lista){
    let op;
    const nuevaTarea = new Tarea(); //Declara una nueva Tarea
    do{
        menu.menuAgregarUnaTarea(); //Muestra el menu donde se ingresan los atributos de la tarea nueva
        op=ingreso.ingresarPorTeclado();
        switch(op){
            case "1":
                nuevaTarea.setTitulo(ingreso.ingresarTitulo()); //Setea el título ingresado en ingresarTitulo en el atributo Titulo de la Tarea
                break;
            case "2":
                nuevaTarea.setDescripcion(ingreso.ingresarDescripcion()); //Setea la descripcion ingresada en ingresarDescripcion en el atributo Descripcion de la Tarea
                break;
            case "3":
                nuevaTarea.setDificultad(ingreso.ingresarDificultad()); //Setea la dificultad ingresada en ingresarDificultad en el atributo Dificultad de la Tarea
                break;
            case "4":
                nuevaTarea.setVencimiento(ingreso.ingresarVencimiento()); //Setea el vencimiento ingresado en ingresarVencimiento en el atributo Vencimiento de la Tarea
                break;
            case "5": //Opcion de terminar la creación de la tarea
                if(comprobarTitulo(nuevaTarea.getTitulo().trim())){ //Comprueba si se ingresó un título para la tarea, si no se ingresó no se puede terminar la creación
                    mostrarEnPantalla("No puedes agregar una tarea sin modificar el titulo.");
                    op="-1";
                }
                else{ //Si se ingresó el título para la tarea
                    mostrarEnPantalla("Se agregó la tarea exitosamente.");
                    lista.aniadirTarea(nuevaTarea); //Ingresa la tarea nueva en el array de tareas
                    procesoOrdenarTareas(lista.getTareas()); //Ordena las tareas del array por título
                }
                break;
            case "0":
                mostrarEnPantalla("La creación de la tarea se canceló exitosamente.");
                break;
            default:
                mostrarIngresoInvalido(); //Si el usuario ingresa un valor fuera de las opciones válidas, muestra el cartel de error
                break;
        }
    }while(op!="0" && op!="5");
}

/*OPCIÓN de VER TAREAS */
export function opcionPrincipal2(lista){
    if(lista.esVacia()){ //Comprueba si la lista de tareas (array) está vacía o no, en caso de estar vacía, solo se mostrará un cartel
        mostrarEnPantalla("La lista está vacía.");
    }
    else{ //Si la lista de tareas no está vacía
        gestionarMenuVerTareas(lista); //Gestiona que tareas ver
    }
}

/*OPCIÓN de BUSCAR TAREAS*/
export function opcionPrincipal3(lista){
    if(lista.esVacia()){ //Comprueba si la lista de tareas (array) está vacía o no, en caso de estar vacía, solo se mostrará un cartel
        mostrarEnPantalla("La lista está vacía.");
    } else { //Si la lista de tareas no está vacía
        menu.menuBuscarTarea(); //Muestra el menu de BuscarTarea
        let busqueda = ingreso.ingresarPorTeclado(); //El usuario ingresa el string que quiere buscar
        procesoVerTareasPorBusqueda(lista, busqueda); //Proceso de búsqueda del string en la lista de tareas
    }
}