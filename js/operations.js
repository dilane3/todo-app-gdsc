// Declarations de quelques operations

// Creation d'une todo
const createTodo = (value, target, marked = false, id=null) => {
  // creation des elements html
  const todoContainer = document.createElement("article")
  const dataContainer = document.createElement("div")
  const checkboxInput = document.createElement("input")
  const todoText = document.createElement("span")
  const deleteBtn = document.createElement("button")

  // Ajout d'attributs
  todoContainer.classList.add("todo")

  if (marked) {
    todoContainer.classList.add("marked")
  }

  todoContainer.id = id ? id:undefined
  checkboxInput.type = "checkbox"
  checkboxInput.checked = marked
  todoText.innerText = value
  todoText.classList.add("todo-text")
  deleteBtn.innerText = "Supprimer"
  deleteBtn.classList.add("delete-todo")
  deleteBtn.onclick = async () => await deleteTodo(todoContainer)
  checkboxInput.onclick = async () => await markTodo(todoContainer, checkboxInput)

  // Imbrication des elements
  dataContainer.appendChild(checkboxInput)
  dataContainer.appendChild(todoText)

  todoContainer.appendChild(dataContainer)
  todoContainer.appendChild(deleteBtn)

  // Ajout du todo dans le DOM
  target.appendChild(todoContainer)
}

// Suppression d'une todo
const deleteTodo = async (todoElement) => {
  const parent = todoElement.parentNode

  /* Partie serveur

  // Suppression de la todo cote server
  const { data, error } = await removeTodo(todoElement.id)

  if (data) {
    // Suppression de la todo cote client
    parent.removeChild(todoElement)
  }

  */

  // Suppression de la todo cote client
  parent.removeChild(todoElement)
}

// Mark todo
const markTodo = async (todoContainer, checkboxInput) => {
  /* Partie serveur

  // marquage d'une todo cote serveur
  const { data, error } = await updateTodo(todoContainer.id)

  if (data) {
    // marquage d'une todo cote client
    todoContainer.classList.toggle("marked")
  }

  */

  // marquage d'une todo cote client
  todoContainer.classList.toggle("marked")
}