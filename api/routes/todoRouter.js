import express from 'express'
import {
  getAllTodo,
  createTodo,
  markTodo,
  deleteTodo
} from '../controllers/todoController.js'

const todoRouter = express.Router()

// Recuperer toutes les taches
todoRouter.get("/", getAllTodo)

// Creer une tache
todoRouter.post("/", createTodo)

// Marquer une tache
todoRouter.put("/:id", markTodo)

// Supprimer une tache
todoRouter.delete("/:id", deleteTodo)

export default todoRouter