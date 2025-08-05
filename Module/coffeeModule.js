import {Schema,model } from "mongoose";
const CoffeSchema = new Schema({
    name: {// lazm ykoun object
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    origin: {
        type: String,
        required: true,
        default: "Unknown",// default value if not provided
    },
    ingr: {
        type: [String], // array of string
    }
});

const CoffeeModel = model("CoffeeModel", CoffeSchema);// ada howa eli ykhali controller yjib la base de donnees
export default CoffeeModel;