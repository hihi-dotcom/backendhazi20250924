import express from "express"
import router from "./router"
import cors from "cors"

const app = express()
app.use(express.json());
app.use("/", router)

app.use(cors({origin:'*'}))


export default app;