let input;
let listaTareas;

window.onload = function() {
    inicializar();
}

function inicializar() {
    console.log('Inicializando aplicacion...');
    input = document.getElementById('nuevaTarea');
    listaTareas = document.getElementById('listaTareas');
}

function agregarTarea() {
    let nuevaTarea = input.value;
    let item = document.createElement('LI');
    let tarea = document.createElement('P');
    let btnBorrar = document.createElement('BUTTON');
    btnBorrar.setAttribute('onclick', 'eliminarTarea(this)');
    btnBorrar.innerText = 'Borrar';
    tarea.innerText = nuevaTarea;
    item.appendChild(tarea);
    item.appendChild(btnBorrar);
    listaTareas.appendChild(item);
}

function eliminarTarea(tarea) {
    tarea.parentElement.remove();
}