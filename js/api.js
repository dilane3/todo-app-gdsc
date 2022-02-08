const instance = axios.create({
  baseURL: "http://localhost:5000/api/todos"
})

// Definition de quelques operations

// Recuperation des todos
const getTodos = async () => {
  try {
    const response = await instance.get("/")

    if (response) {
      return {data: response.data}
    }
  } catch (err) {
    console.log(err)
    return {error: err}
  }
}

// Creation d'une Todo
const postTodo = async (value) => {
  try {
    const response = await instance.post("/", {value})

    if (response) {
      return {data: response.data}
    }
  } catch (err) {
    console.log(err)
    return {error: err}
  }
}

// Marquer une todo
const updateTodo = async (id) => {
  try {
    const response = await instance.put(`/${id}`)

    if (response) {
      return {data: response.data}
    }
  } catch (err) {
    console.log(err)
    return {error: err}
  }
}

// Supprimer une todo
const removeTodo = async (id) => {
  try {
    const response = await instance.delete(`/${id}`)

    if (response) {
      return {data: response.data}
    }
  } catch (err) {
    console.log(err)
    return {error: err}
  }
}