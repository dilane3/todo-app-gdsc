import express from 'express'
import cors from 'cors'
import todoRouter from './routes/todoRouter.js'

const corsOptions = {
  origin: "*"
}

// initialisation de l'app
const app = express()

// defintion des CORS
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// definition des routes
app.use("/api/todos", todoRouter)


// definition du port sur lequel ecouter
app.listen(5000, () => {
  console.log("Server est pret et est accessible depuis http://localhost:5000")
})