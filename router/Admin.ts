import express from "express"
import { createAdmin , getall, updatelist , deletelist } from "../controller/Admincontroller"

const router = express.Router()
router.route("/create-list").post(createAdmin )
router.route("/get-all").get(getall)
router.route("/update-list/:id").put(updatelist)
router.route("/delete-list/:id").delete(deletelist)





export default router