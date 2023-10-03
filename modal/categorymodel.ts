import mongoose  from "mongoose";

interface category {
    name: string;
    description: string;
    brands:object[]; 
    parents: string
}

interface iCategory extends category, mongoose.Document{}

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    description:{
        type:String,
    },
    brands:{
        type:Array,Object,
        default:[],
    },
    parents:{
        type:String
    }
})

export default mongoose.model<iCategory>("category", categorySchema )