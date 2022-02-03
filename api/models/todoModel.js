// Mise en place de la base de donnee
const todos = []

// Declaration des operations

// Recuperation des taches
const getAllT = () => {
  return todos
}

// Creation d'une tache
const createT = (value) => {
  // definition d'un identifiant
  let id = todos.length === 0 ? 1:todos[todos.length-1].id+1

  // creation d'une tache
  const todo = {
    id,
    value,
    marked: false
  }

  // Ajout de la tache dans la bd
  todos.push(todo)
}

// Marquage d'une tache
const markT = (id) => {
  const index = todos.findIndex(todo => Number(todo.id) === Number(id))
  let todo = null

  if (index > -1) {
    todo = todos[index]

    todo.marked = !todo.marked
  }

  return todo
}

// Suppression d'une tache
const deleteT = (id) => {
  const index = todos.findIndex(todo => Number(todo.id) === Number(id))
  console.log(index)

  if (index > -1) {
    todos.splice(index, 1)
  }
}

export {
  getAllT,
  createT,
  markT,
  deleteT
}