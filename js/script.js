
// Lista de tareas

//Modelo

const tareas = [];

let contadorTareas = 0;

function addTask(nombreTarea,fechaTarea, completoTarea){
  const misTareas = {
    id: contadorTareas,
    nombre: nombreTarea,
    fecha: fechaTarea,
    completo: completoTarea,
  };

  tareas.push(misTareas);
  contadorTareas++;

  return misTareas;
}

//Vista

const listContainer = document.getElementById('task-list');

function appendTaskDOM(tarea){
  const list = document.createElement('li');
  list.className = 'task-list_li';
  //Checkbox
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', `tarea-${tarea.id}`);
  //Label
  const label = document.createElement('label');
  label.setAttribute('for', `tarea-${tarea.id}`);
  label.innerHTML = `${tarea.nombre} - ${tarea.fecha}`;
  //Agrego Elementos
  list.appendChild(checkbox);
  list.appendChild(label)
  listContainer.appendChild(list);
}

//Controlador

const listaTareas = document.getElementById('new-task-form');


listaTareas.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const tarea = addTask(listaTareas.elements[0].value,listaTareas.elements[1].value, false)
  appendTaskDOM(tarea);
  
  listaTareas.elements[0].value = '';
})




