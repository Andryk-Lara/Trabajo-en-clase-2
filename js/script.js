
// Lista de tareas

//Modelo

let tareas = [];

let contadorTareas = 0;

const datosLocalStorage = localStorage.getItem('tareas');

if (datosLocalStorage){
  tareas = JSON.parse(datosLocalStorage);
}

const contadorLocalStorage = localStorage.getItem('contador');
console.log(contadorLocalStorage);

console.log(tareas);

if (contadorLocalStorage) {
  contadorTareas = parseInt(contadorLocalStorage);
}
function addTask(nombreTarea,fechaTarea, completoTarea){
  const misTareas = {
    id: contadorTareas,
    nombre: nombreTarea,
    fecha: fechaTarea,
    completo: completoTarea,
  };

  tareas.push(misTareas);
  contadorTareas++;
  localStorage.setItem('contador', contadorTareas);
  localStorage.setItem('tareas', JSON.stringify(tareas));
  return(misTareas);
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

for(let i = 0; i < tareas.length; i++){
  appendTaskDOM(tareas[i]);
}

//Controlador

const listaTareas = document.getElementById('new-task-form');


listaTareas.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const tarea = addTask(listaTareas.elements[0].value,listaTareas.elements[1].value, false)
  appendTaskDOM(tarea);
  
  listaTareas.elements[0].value = '';
})




