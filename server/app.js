import express  from "express"
import cors from "cors"
import * as dotenv from "dotenv"
import {postRouter,dellERouter} from "./Routes/indexRoutes.js"

const app = express()

dotenv.config()

app.use(cors)
app.use(express.json({limit:"50mb"}))

app.use("api/v1/post",postRouter)
app.use("api/v1/dellE",dellERouter)

app.get("/", (req, res) => res.send(`Server Running Working at ${req.url}`))



export default app