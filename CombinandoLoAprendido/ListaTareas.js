export class listaTareas{
    #tareas; //Declara tareas como privado

    constructor(){ //Constructor de listaTareas
        this.#tareas=[]; //Declara un array de tareas
    }

    getTareas(){ //Método que devuelve una tarea
        return this.#tareas;
    }

    aniadirTarea(nuevaTarea){ //Método que añade una tarea al array de tareas
        this.#tareas.push(nuevaTarea); //Pushea la tarea nueva (nuevaTarea) dentro del array de tareas
    }

    esVacia(){ //Método que comprueba si el array está vacío
        return (this.#tareas.length===0); //Si el tamaño del array es 0 retorna true
    }
    
    filtrarTareasPorEstado(estado){ //Método que filtra las tareas por el estado que eligió el usuario
        if(estado !== 'Todas'){
            return this.#tareas
            .map((tarea, i) => ({ tarea, indice: i }))  // Crea un objeto temporal con tarea e índice
            .filter(({ tarea }) => tarea.getEstado() === estado)  // Filtra por el estado
            .map(({ indice }) => indice);  // Extrae solo los índices
        } else {
            return this.#tareas.map((tarea, i) => ({ tarea, indice: i })).map(({ indice }) => indice) ; //Extrae los índices de todas las tareas
        }
    }

    buscarTarea(busqueda){ //Método que filtra las tareas por el string de búsqueda que ingresó el usuario
        const tareasFiltradas = this.#tareas //Se declara tareasFiltradas con los valores del array de tareas donde:
            .map((tarea, indice) => ({titulo: tarea.getTitulo().toLowerCase(), indice})) //Se extrae los títulos de las tareas junto con sus índices
            .filter(({titulo}) => titulo.includes(busqueda.toLowerCase())) //Filtra los títulos dependiendo de si incluyen el string de búsqueda
            .map(({ indice }) => indice); //Extrae los índices ya filtrados
        return tareasFiltradas; //Devuelve el array con índices
    }
   
}