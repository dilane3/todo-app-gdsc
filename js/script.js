// Declaration des variables
const textInput = document.getElementById("text-input")
const btnCreate = document.getElementById("btn-create")
const listTodo = document.getElementById("list-todo")
let deleteBtns = document.querySelectorAll(".delete-todo")


// Gestion des evenements

// Creation d'une todo
btnCreate.addEventListener("click", (e) => {
  e.preventDefault()

  const value = textInput.value

  if (value.length > 0) {
    createTodo(value, listTodo)

    textInput.value = ""

    // Reselection des boutons
    deleteBtns = document.querySelectorAll(".delete-todo")
  }
})

// Suppression d'une todo
// deleteBtns.forEach(btn => {
//   btn.onclick = (e) => {
//     e.preventDefault()
//     console.log("hello")

//     deleteTodo(btn.parentNode)
//   }
// })