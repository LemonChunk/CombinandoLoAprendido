import { ingresarPorTeclado } from "./FuncionesIngreso.js";
import { menuPrincipal } from "./FuncionesMenu.js";
import { opcionPrincipal1, opcionPrincipal2, opcionPrincipal3 } from "./FuncionesPrincipales.js";
import { listaTareas } from "./ListaTareas.js";
const xd = new listaTareas();
let op;

do{
    menuPrincipal();
    op=ingresarPorTeclado();
    switch(op){
        case "1":
            opcionPrincipal1(xd);
            break;
        case "2":
            opcionPrincipal2(xd);
            break;
        case "3":
            opcionPrincipal3(xd);
            break;
    }
}while(op!=4);