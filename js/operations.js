// Declarations de quelques operations

// Creation d'une todo
const createTodo = (data, target) => {
  console.log(data)
  // creation des elements html
  const todoContainer = document.createElement("article")
  const dataContainer = document.createElement("div")
  const checkboxInput = document.createElement("input")
  const todoText = document.createElement("span")
  const deleteBtn = document.createElement("button")

  // Ajout d'attributs
  todoContainer.classList.add("todo")
  checkboxInput.type = "checkbox"
  todoText.innerText = data
  todoText.classList.add("todo-text")
  deleteBtn.innerText = "Supprimer"
  deleteBtn.classList.add("delete-todo")
  deleteBtn.onclick = () => deleteTodo(todoContainer)
  checkboxInput.onclick = () => markTodo(todoContainer, checkboxInput)

  // Imbrication des elements
  dataContainer.appendChild(checkboxInput)
  dataContainer.appendChild(todoText)

  todoContainer.appendChild(dataContainer)
  todoContainer.appendChild(deleteBtn)

  // Ajout du todo dans le DOM
  target.appendChild(todoContainer)
}

// Suppression d'une todo
const deleteTodo = (todoElement) => {
  const parent = todoElement.parentNode

  parent.removeChild(todoElement)
}

// Mark todo
const markTodo = (todoContainer, checkboxInput) => {
  todoContainer.classList.toggle("marked")
  // checkboxInput.checked = !checkboxInput.checked

  console.log(checkboxInput)
}