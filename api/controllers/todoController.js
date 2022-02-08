// Definition des controlleurs
import {
  getAllT,
  createT,
  markT,
  deleteT
} from "../models/todoModel.js"

const getAllTodo = (req, res) => {
  // recuperation des taches
  const todos = getAllT()

  res.status(200).json(todos)
}

const createTodo = (req, res) => {
  // extraction de la valeur de la requette
  const { value } = req.body
  console.log({value})

  // creation d'une tache
  const todo = createT(value)

  res.status(201).json({ message: "la tache a été créé", data: todo })
}

const markTodo = (req, res) => {
  // extraction de l'identifiant des parametres
  const { id } = req.params

  // marquage de la tache
  const todo = markT(id)

  res.status(200).json({ message: "la tache a été marqué" })
}

const deleteTodo = (req, res) => {
  // extraction de l'identifiant des parametres
  const { id } = req.params
  console.log(id)

  // suppression de la tache
  deleteT(id)

  res.status(200).json({ message: "la tache a été supprimé" })
}

export {
  getAllTodo,
  createTodo,
  markTodo,
  deleteTodo
}