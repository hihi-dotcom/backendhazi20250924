import express from "express"
import * as bodyParser from "body-parser";
import router from "./router"
const cors = require("cors");


const app = express()
app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use("/", router)

app.use(cors({origin:'*'}))
app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
  })

export default app;