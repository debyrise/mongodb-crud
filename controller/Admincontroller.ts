import Adminmodel from "../modal/Adminmodel"
import exoress, {Request, Response, request} from "express"


  export const createAdmin = async (req:Request, res: Response): Promise <Response> => {
    try
     {

      const {firstname, lastname, email, gender,isActive } = req.body
      if (!firstname|| !lastname|| !email || !gender || !isActive)
      {
        return res.status(404).json({
            message: "all field required"
        })
      }

      const checkemail = await Adminmodel.findOne({email:email})
      console.log("email", checkemail)
      if(checkemail)
      {
       return res.status(404).json({
           maessage:"email already exist"
       })
      }
      const adminlist = await Adminmodel.create({
        firstname,
        lastname,
        email,
        gender,
        isActive
      })
        return res.status(201).json({
            message: "admin profile  created",
            data: adminlist
        })


    }catch (error:any)
    {
       return res.status (404).json({
        message: error.message
       })
    }
}

 export const getall = async(req:Request, res:Response):Promise <Response> => {
  try
  {
    const data = await Adminmodel.find()
    return res.status (200).json({
      message: "profile connection",
      result: data
    })

  }catch(error:any)
  {
      return res.status(404).json({
        message: error.message
      })
  }
}
export const updatelist = async(req:Request, res:Response):Promise <Response> => {
  try
  {
    const Adminid = [req.params.id]
    const Adminpro = await Adminmodel.findByIdAndUpdate(Adminid,req.body,{new:true})
    

    return res.status(200).json({
      messsage: "admin profile  updated successfully",
      result: Adminpro
    })

  }catch(error:any)
  {
     return res.status(404).json({
      message: error.message
     })
  }
}

export const deletelist= async (req:Request, res:Response):Promise <Response> => {
  try
  {
    const  Admindi = [req.params.id]
    const del = await Adminmodel.findByIdAndRemove(Admindi)
    return res.status(200).json({
      message: "delete successful",
      result : del
    })
  }catch(error:any)
  {
      return res.status(404).json({
        message: "error.message"
      })
  }
}