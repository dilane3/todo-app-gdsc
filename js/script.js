// Declaration des variables
const textInput = document.getElementById("text-input")
const btnCreate = document.getElementById("btn-create")
const listTodo = document.getElementById("list-todo")
let deleteBtns = document.querySelectorAll(".delete-todo")


// Gestion des evenements

/* Partie serveur

// Recuperation des todos
window.addEventListener("load", async () => {
  const {data, error} = await getTodos()

  if (data) {
    console.log(data)
    data.forEach(item => createTodo(item.value, listTodo, item.marked, item.id))
  }
})

*/

// Creation d'une todo
btnCreate.addEventListener("click", async (e) => {
  e.preventDefault()

  const value = textInput.value

  if (value.length > 0) {
    /* Partie serveur

    // creation d'une todo cote server
    const {data, error} = await postTodo(value)

    if (data) {
      const todo = data.data

      // creation d'une todo cote client
      createTodo(todo.value, listTodo, todo.marked, todo.id)
  
      textInput.value = ""
    }

    */

    // creation d'une todo cote client
    createTodo(value, listTodo)
  
    textInput.value = ""
  }
})
