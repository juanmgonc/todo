let tarea = {
    id: 1,
    titulo: "Sacar la basura"
};

let tareas = [];

function crearTarea(idTarea, tituloTarea) {
    let tareaNueva = {
        id: idTarea,
        titulo: tituloTarea
    };
    return tareaNueva;
}

function agregarTarea(tareas, tarea) {
    tareas.push(tarea);
}

function eliminarTarea(tareas, tarea) {
    tareas.splice(tarea.id, 1);
}

function eliminarTareas(tareas) {
    let totalElementos = tareas.length;
    tareas.splice(0, totalElementos);
}

function mostrarTareas(tareas) {
    console.log("Lista de tareas:");
    console.log("================");
    for (let index = 0; index < tareas.length; index++) {
        console.log(tareas[index].titulo);
    }
}

function generarId() {
    if (tareas.length == 0) {
        return 0;
    } else {
        let ultimoId = tareas[tareas.length - 1].id;
    let nuevoId = ultimoId + 1;
    return nuevoId;
    }
    
}