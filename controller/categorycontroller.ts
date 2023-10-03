import express, {Request, Response} from "express"
import categoryModel from "../modal/categorymodel"


export const createCategory = async (req:Request, res:Response):Promise<Response>=>{
    try

    {
        let {name, description, brands, parents} = req.body
        brands = []
        req.body.brands.forEach((element: any) => {
            brands.push(element)
        })

        const  categoryRegisterData = await categoryModel.create({
            name, description, brands, parents
        })
        return res.status(201).json({
            message: "category created successfully",
            success: 1,
            result:categoryRegisterData
        })
    }catch(error:any)
    {
        return res.status(404).json({
            message:error.message
        })
    }
}
export const getAllCategory = async (req:Request, res:Response):Promise<Response>=>{
    try{
        const data = await categoryModel.find()
        return res.status(200).json({
            message: "all category",
            length:data.length,
            result:data
        })
    }catch(error:any)
    {
        return res.status(404).json({
            message:error.message
        })
    }
}
export const getOneCategory = async (req: Request, res: Response):Promise<Response> => {
    try {
      const { categoryId } = req.params;
      const data = await categoryModel.findById(categoryId);
      return res.status(200).json({
        message: "Single category",
      });
    } catch (error) {
      return res.status(404).json({
        message: "error.message",
      });
    }
  }
  export const deleteCategory = async(req:Request, res:Response):Promise<Response>=>{
    try{
        const categoryId = req.params.id;
        const deletedData = await categoryModel.findByIdAndDelete(categoryId)
        

        if (!deleteCategory){
            return res.status(404).json({
                status: "failed to update",
                message: "no data with the id: " + categoryId + "was found to delete"
            })
        }
        return res.status(200).json({
            status: "success",
            message: "data deleted successfully",
            result: deletedData
        })
    }catch(error:any)
    {
        return res.status(500).json({
            status: "failed",
            message: error.message
})
}
   
  }
  export const updatevalue = async( req:Request, res:Response ):Promise <Response> => {
    try
    {
      const dataid = [req.params.id]
      const datas = await categoryModel.findByIdAndUpdate(dataid,req.body, {new:true})
  
      return res.status(200).json({
        messsage: "product updated successfully",
        result:datas
      })
  
    }catch(error:any)
    {
       return res.status(404).json({
        message: error.message
       })
    }
  }

  export default {createCategory, getAllCategory, getOneCategory, deleteCategory, updatevalue}