import productmodal from "../modal/productmodal";
import exoress, {Request, Response, request} from "express"


  export const createpdt = async (req:Request, res: Response): Promise <Response> => {
    try
     {

      const {productname, des,price, category } = req.body
      if (!productname || !des|| !price || !category)
      {
        return res.status(404).json({
            message: "all field required"
        })
      }
      const taskdata = await productmodal.create({
        productname,
        des,
        price,
        category
      })
        return res.status(201).json({
            message: "product created",
            data: taskdata
        })


    }catch (error:any)
    {
       return res.status (404).json({
        message: error.message
       })
    }
}

 export const getallproduct = async(req:Request, res:Response):Promise <Response> => {
  try
  {
    const data = await productmodal.find()
    return res.status (200).json({
      message: "all product",
      result: data
    })

  }catch(error:any)
  {
      return res.status(404).json({
        message: error.message
      })
  }
}
export const updatevalue = async( req:Request, res:Response ):Promise <Response> => {
  try
  {
    const dataid = [req.params.id]
    const datas = await productmodal.findByIdAndUpdate(dataid,req.body, {new:true})

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

export const deletepdt= async (req:Request, res:Response):Promise <Response> => {
  try
  {
    const  pdtdel = [req.params.id]
    const pdtdelete = await productmodal.findByIdAndRemove(pdtdel)
    return res.status(200).json({
      message: "delete successful",
      result : pdtdelete
    })
  }catch(error:any)
  {
      return res.status(404).json({
        message: "error.message"
      })
  }
}