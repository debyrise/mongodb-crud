import "./db/db"
import express,{ Application, Request,Response} from "express"
import mongoose from "mongoose"
import pdtrouter  from "./router/pdtrouter"
import categoryrouter from "./router/categoryrouter"
import Admin from "./router/Admin"

const port: number = 2020

const app: Application = express()
app.use(express.json())


app.use("/api/v1", pdtrouter)
app.use("/api/v1", categoryrouter)
app.use("/api/v1",Admin)


app.get("/", async(req: Request, res:Response) => {
    res.status(201).json({message: "api is ready"})
})


const server = app.listen(port, () => {
    console.log("listening to port", port)})
    
    process.on ("uncaughtException", (error:Error) => {
        console.log("stop here: uncaughtException ")
        console.log(error)
        process.exit(1)
    });

    process.on ("unhandledRejection", (reason:any) => {
        console.log("stop here:unhandledRejection ")
        console.log(reason)


        server.close(() => {
            process.exit
        })
    })