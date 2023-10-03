import mongoose from "mongoose";

interface product {
    productname: string,
    des: string,
    price: number,
    category: string
}

interface iproduct extends product, mongoose.Document{}

const productschema = new mongoose.Schema({
    productname: {
        type:String,
        require:true
    },
    des: {
        type:String,
        require:true
    },
    price: {
        type:Number,
        require:true
    },
    category: {
        type:String,
        require:true
    },
  
},
 {
    timestamps:true
 }

)

export default mongoose.model <iproduct>("product",productschema )