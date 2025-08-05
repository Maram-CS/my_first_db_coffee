import DBConfig from "../config/DBConfig.js";
import CoffeeModel from "../Module/coffeeModule.js";
import { config } from "dotenv";
config();
DBConfig(process.env.DATABASE_NAME || "coffee_shop");

// Crud functions

const getAllCoffees = async (req, res,next) => {
    try{const Allcoffees = await CoffeeModel.find({});
    if(Allcoffees){
        res.status(200).json(Allcoffees);
    }else{
        res.status(400).json();
    }
    next();
    } catch (error) {
        console.error(error);
        
    }
}
    


const getACoffee = async (req,res,next) => {
    try {
        const wantedCoffe = await CoffeeModel.findById(req.params.id);
        if(wantedCoffe){
            res.status(200).json(wantedCoffe);
        }else{
            res.status(404).json();
        }
        next();
    } catch (error) {
        console.error(error);
        
    }
}

const uppdateCoffe = async (req,res,next) => {
    try{
        const UPcoffee = await CoffeeModel.findByIdAndUpdate(req.params.id,req.body);
            if(UPcoffee){
                res.status(200).json(UPcoffee);
            }else{
                res.status(500).json();
            }
            next();
    }catch(err){
        console.error(err);
    }
}

const deletCoffee = async(req,res,next) => {
    try{
        const DeleCoffeee = await CoffeeModel.findByIdAndDelete(req.params.id);
            if(DeleCoffeee){
                res.status(200).json(DeleCoffeee);
            }else
            {
                res.status(400).json;
            }
            next();
    }catch(err){
        console.error(err);
    }
}

const AddCoffe = async(req,res,next)=>{
    try{
        const newCoffee = new CoffeeModel(req.body);
        
        const Coffe  = await newCoffee.save();
        if(Coffe){
            res.status(200).json(Coffe);
        }else{
            res.status(400).json();
        }
        next();
    }catch(err){
        console.error(err);
    }


}

export {AddCoffe,getACoffee,getAllCoffees,uppdateCoffe,deletCoffee}