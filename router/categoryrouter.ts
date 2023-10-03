import express from "express"
import { createCategory, getAllCategory,getOneCategory, deleteCategory, updatevalue } from "../controller/categorycontroller"

const router = express.Router()

router.route("/category-register").post(createCategory)
router.route("/category").get(getAllCategory)

router.route("/category-single/").get(getOneCategory)

router.route("/delete-product/:Id").delete(deleteCategory)

router.route("/update-product/:Id").put(updatevalue)

export default router