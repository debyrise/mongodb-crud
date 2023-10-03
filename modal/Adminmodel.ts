import mongoose from "mongoose";

interface Admin {
    firstname:string,
    lastname:string,
    email: string,
    gender: string,
    isActive:boolean
}

interface iAdmin extends Admin, mongoose.Document{}

const Adminschema = new mongoose.Schema({
    firstname:
    {
        type: String,


    },
   lastname: {
        type: String,


    },
   email: {
        type: String,


    },
   gender: {
        type: String,


    },
    isActive:{
        types:Boolean
    },
},
{
    timestamps:true
}
)
    export  default mongoose.model<iAdmin>("Admin", Adminschema)

    

