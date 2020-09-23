
// Lista de tareas

const listaTareas = document.getElementById('new-task-form');
const listContainer = document.getElementById('task-list');
const tareas = [];
let contadorTareas = 0;

listaTareas.addEventListener('submit', (event) => {
  event.preventDefault();
  const list = document.createElement('li');
  list.className = 'task-list_li';
  //Checkbox
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', `tarea-${contadorTareas}`);
  //Label
  const label = document.createElement('label');
  label.setAttribute('for', `tarea-${contadorTareas}`);
  label.innerHTML = listaTareas.elements[0].value;
  //Agrego Elementos
  list.appendChild(checkbox);
  list.appendChild(label)
  listContainer.appendChild(list);
  const misTareas = {
    id: contadorTareas,
    nombre: listaTareas.elements[0].value,
    completo: false,
  };
  tareas.push(misTareas);
  console.log(tareas);
  contadorTareas++;
  listaTareas.elements[0].value = '';
})
