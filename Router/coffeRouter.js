//import express package

import { Router } from 'express';
import {AddCoffe,getACoffee,getAllCoffees,uppdateCoffe,deletCoffee} from '../controller/coffeeController.js';

const router = Router();

router.get("/",getAllCoffees);
router.get("/:id",getACoffee);
router.post("/add",AddCoffe);
router.put("/update/:id",uppdateCoffe);
router.delete("/delet/:id",deletCoffee);

export default router;