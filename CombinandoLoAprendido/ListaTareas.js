export class listaTareas{
    #tareas;
    constructor(){
        this.#tareas=[];
    }
    getTareas(){
        return this.#tareas;
    }
    aniadirTarea(nuevaTarea){
        this.#tareas.push(nuevaTarea);
    }
    esVacia(){
        return (this.#tareas.length===0);
    }
    filtrarTareasPorEstado(estado){
        if(estado !== 'Todas'){
            return this.#tareas
            .map((tarea, i) => ({ tarea, indice: i }))  // Crea un objeto temporal con tarea e índice
            .filter(({ tarea }) => tarea.getEstado() === estado)  // Filtra por el estado
            .map(({ indice }) => indice);  // Extrae solo los índices
        } else {
            return this.#tareas.map((tarea, i) => ({ tarea, indice: i })).map(({ indice }) => indice) ;
        }
    }
    buscarTarea(busqueda){
        const tareasFiltradas = this.#tareas
            .map((tarea, indice) => ({titulo: tarea.getTitulo().toLowerCase(), indice}))
            .filter(({titulo}) => titulo.includes(busqueda.toLowerCase()))
            .map(({ indice }) => indice);
        return tareasFiltradas;
    }
   
}