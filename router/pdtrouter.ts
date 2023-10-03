import express from "express"
import {createpdt,getallproduct, updatevalue, deletepdt } from "../controller/productcontroller"


const router = express.Router()
router.route("/create-pdt").post(createpdt)
router.route ("/get-all").get(getallproduct)
router.route("/update-pdt/:id").put(updatevalue )
router.route ("/delete-pdt/:id").delete(deletepdt)





export default router