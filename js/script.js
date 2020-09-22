
// Lista de tareas

const listaTareas = document.getElementById('new-task-form');
listaTareas.addEventListener('submit', (event) => {
  event.preventDefault();
  
  console.log(listaTareas.elements[0].value);
})
